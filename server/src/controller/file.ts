import { Elysia } from "elysia";
import { addFile, files, getFileById } from "../Queries";
import { directoryFiles } from "../Queries/File";
import { fileModel } from "../modals";
import { getFile, upload } from "../utils/file";
import { authPlugin } from "../utils/plugin";

export const fileController = new Elysia({ prefix: "/files" })
	.use(fileModel)
	.use(authPlugin)
	.get(
		"",
		async ({ query: { path } }) => {
			return path ? await directoryFiles(path) : await files();
		},
		{
			query: "file.path",
			detail: {
				summary: "Get files data",
				tags: ["File"],
			},
		},
	)
	.post(
		"",
		async ({ user, body: { file, path } }) => {
			await upload(file, path).then(async (save_path: string) => {
				const dirSavePath: Array<string> = save_path.split("/");
				dirSavePath.pop();
				return await addFile(
					file.name,
					user.id,
					save_path,
					file.type,
					dirSavePath.join("/"),
				);
			});
		},
		{
			body: "file.add",
			detail: {
				summary: "Add file",
				tags: ["File"],
			},
		},
	)
	.get(
		"/:id",
		async ({ params: { id } }) => {
			const file = await getFileById(id);
			return file && (await getFile(file.path));
		},
		{
			detail: {
				summary: "Get file by id",
				tags: ["File"],
			},
		},
	);
