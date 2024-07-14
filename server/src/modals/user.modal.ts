import { Elysia, t } from "elysia";

// bank.model.ts
export const userModel = new Elysia().model({
  "user.auth": t.Object({
    name: t.String({ error: "name must be string." }),
    password: t.String({ error: "password must be string." }),
  }),
  "user.id": t.Object({
    id: t.String({ error: "user id must be string." }),
  })
});
