const supertest = require("supertest");
const mongoose = require("mongoose");
const app = require("../app");
const { MongoMemoryServer } = require("mongodb-memory-server");


describe("book route", () => {

    beforeAll(async () => {
        const mongoServer = await MongoMemoryServer.create();
        await mongoose.connect(mongoServer.getUri());
    });

    afterAll(async () => {
        await mongoose.disconnect();
        await mongoose.connection.close();
    });

    describe("get book route", () => {
        describe("given the book does not exist", () => {
            it("should return a 404", async () => {
                const bookId = "book-123";
                await supertest(app).get(`/api/books/${bookId}`).expect(404);

            });
        });
    });
    
});
