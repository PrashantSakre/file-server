import jwt from "@elysiajs/jwt";
import { PrismaClient } from "@prisma/client";
import type Elysia from "elysia";

const prisma = new PrismaClient();

const authPlugin = (app: Elysia) =>
	app
		.use(
			jwt({
				name: "jwt",
				secret: Bun.env.JWT_SECRET || "secret",
			}),
		)
		.derive({ as: "scoped" }, async ({ jwt, cookie: { accessToken }, set }) => {
			if (!accessToken.value) {
				set.status = "Unauthorized";
				throw new Error("Access token is missing");
			}
			const jwtPayload = await jwt.verify(accessToken.value);
			if (!jwtPayload) {
				set.status = "Forbidden";
				throw new Error("Access token is invalid");
			}

			const userId = jwtPayload.sub;
			const user = await prisma.user.findFirst({
				where: {
					id: userId,
				},
			});

			if (!user) {
				set.status = "Forbidden";
				throw new Error("Access token is invalid");
			}

			return {
				user,
			};
		});

export { authPlugin };
