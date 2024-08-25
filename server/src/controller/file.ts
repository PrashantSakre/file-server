import type { File } from "@prisma/client";
import { Elysia } from "elysia";
import { addFile, files, getFileById } from "../Queries";
import { directoryFiles, searchHash } from "../Queries/File";
import { fileModel } from "../modals";
import { getFile, hashFile, upload } from "../utils/file";
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
		async ({ user, body: { file, path }, set }) => {
			return await upload(file, path, user.name).then(async (save_path: string) => {
				const dirSavePath: Array<string> = save_path.split("/");
				dirSavePath.pop();
				const hash: string = await hashFile(save_path);
				const hashSerch: File | null = await searchHash(hash);
				if (hashSerch) {
					set.status = 409;
					return { message: "File already exists" };
				}
				set.status = 201;
				return await addFile(file.name, user.id, save_path, file.type, dirSavePath.join("/"), hash);
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
	)
	.get(
		"/search",
		async ({ query: { hash } }) => {
			return await searchHash(hash);
		},
		{
			query: "file.search",
			detail: {
				summary: "Get file by id",
				tags: ["File"],
			},
		},
	);
