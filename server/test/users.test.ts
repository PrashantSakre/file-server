import { afterAll, describe, expect, it } from "bun:test";
import { app } from "../src";

const baseUrl = `${app.server?.hostname}:${app.server?.port}/api/users`;

describe("USERS Test suite", () => {
	describe("GET Users suite", () => {
		it("should return a list of users successfully", async () => {
			const req = new Request(baseUrl);
			const res = await app.fetch(req);
			expect(res.status).toEqual(200);
		});

		// In case Bun does not automatically terminate the test runner after all tests run
		afterAll(() => {
			Bun.exit(0);
		});
	});
});
