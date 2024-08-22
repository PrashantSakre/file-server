import { cors } from "@elysiajs/cors";
import { staticPlugin } from "@elysiajs/static";
import { swagger } from "@elysiajs/swagger";
import { Elysia } from "elysia";
import { Logestic } from "logestic";
import { authController, fileController, usersController } from "./controller";
import { directoryController } from "./controller/directory";
import { authPlugin } from "./utils/plugin";

export const app = new Elysia();

app
	.use(Logestic.preset("fancy"))
	.use(cors())
	.use(staticPlugin({ prefix: "/public" }))
	.use(
		swagger({
			documentation: {
				info: {
					title: "File server",
					version: "0.0.1",
					description: "Self hosted file server.",
				},
			},
		}),
	)
	.get("/", () => "Hello Elysia")
	.use(authController)
	.group("/api", (app) =>
		app.use(authPlugin).use(usersController).use(fileController).use(directoryController),
	)
	.listen(Bun.env.PORT || 3000, () =>
		console.log(`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`),
	);
