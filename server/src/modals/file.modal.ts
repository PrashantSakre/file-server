import { Elysia, t } from "elysia";

export const fileModel = new Elysia().model({
	"file.add": t.Object({
		file: t.File({ error: "Expected file" }),
		path: t.String({
			pattern: "^/(?:[^/]+/)*[^/]*$",
			error: "Expected path to end with '/' to make it folder, e.g 'files/'",
		}),
	}),
	"file.path": t.Object({
		path: t.Optional(
			t.String({
				pattern: "^/.*[^/]?$",
				error: "Expected path should start with '/', e.g '/files'",
			}),
		),
	}),
	"file.search": t.Object({
		hash: t.String({ error: "Expected hash query param." }),
	}),
});
