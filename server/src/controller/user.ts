import { Elysia, t } from "elysia";
import {
  addUser,
  getUserById,
  users,
} from "../Queries";
import { userModel } from "../modals";

export const usersController = new Elysia({ prefix: "/users" })
  .use(userModel)
  .get("", async () => {
    return await users();
  })
  .post(
    "/add",
    async ({ user, body: { name, password } }) => {
      if (user.isAdmin) {
        return await addUser(name, password);
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
