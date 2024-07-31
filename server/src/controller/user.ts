import { Elysia } from "elysia";
import { addUser, getUserById, users } from "../Queries";
import { userModel } from "../modals";
import { authPlugin } from "../utils/plugin";
import { generateHash } from "../utils/bycrpt";

export const usersController = new Elysia({ prefix: "/users" })
	.use(userModel)
	.use(authPlugin)
	.get("", async () => {
		return await users();
	})
	.post(
		"/add",
		async ({ user, body: { name, password } }) => {
			const hash: string = await generateHash(password);
			if (user.isAdmin) {
				return await addUser(name, hash);
			}
			return new Error("Only admins can add user.");
		},
		{
			body: "user.auth",
		},
	)
	.get(
		"/:id",
		async ({ params: { id } }) => {
			return await getUserById(id);
		},
		{
			params: "user.id",
		},
	);
