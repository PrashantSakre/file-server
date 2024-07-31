import { Elysia, t } from "elysia";
import { addFile, files, getFileById } from "../Queries";
import { fileModel } from "../modals";
import { getFile, upload } from "../utils/file";
import { authPlugin } from "../utils/plugin";

export const fileController = new Elysia({ prefix: "/files" })
	.use(fileModel)
	.use(authPlugin)
	.get("", async () => {
		return await files();
	})
	.post(
		"",
		async ({ user, body: { file, path } }) => {
			await upload(file, path).then(async (save_path: string) => {
				return await addFile(file.name, user.id, save_path, file.type);
			});
		},
		{
			body: "file.add",
		},
	)
	.get("/:id", async ({ params: { id } }) => {
		const file = await getFileById(id);
		return await getFile(file?.path, file?.name);
	});
