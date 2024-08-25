import jwt from "@elysiajs/jwt";
import { Elysia, t } from "elysia";
import { addAdmin, getAdminUsers, getUserByName } from "../Queries";
import { userModel } from "../modals";
import { checkHash, generateHash } from "../utils/bycrpt";

export const authController = new Elysia({ prefix: "/auth" })
	.use(
		jwt({
			name: "JWT",
			secret: Bun.env.JWT_SECRET || "test",
			exp: Bun.env.JWT_EXP,
		}),
	)
	.use(userModel)
	.guard({
		body: "user.auth",
	})
	.post(
		"/signupadmin",
		async ({ JWT, cookie: { accessToken }, body: { name, password } }) => {
			const admin = await getAdminUsers();
			if (admin.length) {
				return new Error("Admin already exists.");
			}
			const hash: string = await generateHash(password);
			const user = await addAdmin(name, hash);
			accessToken.set({
				value: await JWT.sign({ sub: user.id }),
			});
			return { message: "Signup success" };
		},
		{
			detail: {
				summary: "Sign up add first Admin",
				tags: ["Auth"],
			},
		},
	)
	.post(
		"/signin",
		async ({ JWT, cookie: { accessToken }, body: { name, password } }) => {
			const user = await getUserByName(name);
			if (!user) {
				return new Error("User doesn't exists.");
			}
			if (await checkHash(password, user.password)) {
				accessToken.set({
					value: await JWT.sign({ sub: user.id }),
				});
				return { message: "Login success" };
			}
			return new Error("Something went wrong please check your password.");
		},
		{
			detail: {
				summary: "Sign In",
				tags: ["Auth"],
			},
		},
	);
