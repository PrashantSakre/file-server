import { cors } from "@elysiajs/cors";
import { staticPlugin } from "@elysiajs/static";
import { swagger } from "@elysiajs/swagger";
import { logger } from "@grotto/logysia";
import { Elysia } from "elysia";
import { authController, fileController, usersController } from "./controller";
import { authPlugin } from "./utils/plugin";

export const app = new Elysia();

app
  .use(cors())
  .use(staticPlugin({ prefix: "/public" }))
  .use(logger())
  .use(swagger({
    documentation: {
      info: {
        title: "File server",
        version: "0.0.1",
        description:
          "Self hosted file server.",
      },
    },
  }))
  .get("/", () => "Hello Elysia")
  .use(authController)
  .use(
    authPlugin
  )
  .group("/api", (app: Elysia) => app.use(usersController).use(fileController))
  .listen(Bun.env.PORT || 3000, () =>
    console.log(
      `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`,
    ),
  );
