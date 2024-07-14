import { Elysia, t } from "elysia";
import { addFile, files, getFileById } from "../Queries";
import { getFile, upload } from "../utils/file";
import { fileModel } from "../modals";

export const fileController = new Elysia({ prefix: "/files" })
  .use(fileModel)
  .get("", async () => {
    return await files();
  })
  .post(
    "",
    async ({ body: { title, file, path, userId } }) => {
      await upload(title, file, path).then(async () => {
        return await addFile(title, userId, path);
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
