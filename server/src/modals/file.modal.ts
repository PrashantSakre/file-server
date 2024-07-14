import { Elysia, t } from "elysia";

export const fileModel = new Elysia().model({
  "file.add": t.Object({
    title: t.String(),
    file: t.File(),
    path: t.String(),
    userId: t.String(),
  })
});
