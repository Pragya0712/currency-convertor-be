const app = require("../index");

describe("currencies", () => {
	test("returns list of currencies", async () => {
		const res = await request(app).get("/api/v1/currencies");
		expect(res.statusCode).toEqual(200);
		// expect(res.body).toEqual({
		// 	message: "Hello World",
		// });
	});
});
