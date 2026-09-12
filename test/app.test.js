const request = require("supertest");
const app = require("../app");

describe("Logistics API", () => {

    test("GET / debe responder correctamente", async () => {
        const response = await request(app).get("/");

        expect(response.statusCode).toBe(200);
        expect(response.body.application).toBe("Logistics API");
        expect(response.body.status).toBe("running");
    });

});