const request = require("supertest");

const server = require("./server.js");

describe("server.js", () => {
  describe("index route", () => {
    it("should set testing env", () => {
      expect(process.env.DB_ENV).toBe("testing");
    });

    it("should return an OK status code from the index route", async () => {
      const expectedStatusCode = 200;

      const response = await request(server).get("/");

      expect(response.status).toEqual(expectedStatusCode);
    });

    it("should return a JSON object from the index route", async () => {
      const expectedBody = { api: "running" };

      const response = await request(server).get("/");

      expect(response.body).toEqual(expectedBody);
    });

    it("should return a JSON object from the index route", async () => {
      const response = await request(server).get("/");

      expect(response.type).toEqual("application/json");
    });
  }),
    describe("games route", () => {
      it("should return 201 status code to get games", async () => {
        const expectedStatusCode = 201;

        const response = await request(server).get("/api/games");

        expect(response.status).toEqual(expectedStatusCode);
      });
    });
});
