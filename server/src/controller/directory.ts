import { Elysia } from "elysia";
import { fileModel } from "../modals";
import { getFolderItems, scanFolder } from "../utils/file";
import { authPlugin } from "../utils/plugin";

export const directoryController = new Elysia({ prefix: "/directory" })
	.use(fileModel)
	.use(authPlugin)
	.get(
		"/scan",
		async ({ query: { path } }) => {
			const PATH = `${process.env.FILE_PATH}/files${path || ""}`;
			const folders = (await scanFolder(PATH)).map((i) => i.split("/").at(-1));
			return {
				folders,
				files: await getFolderItems(PATH),
			};
		},
		{
			query: "file.path",
			detail: {
				summary: "Get directory scan",
				tags: ["Directory"],
			},
		},
	);
