import { FastifyInstance } from 'fastify';
import app from '../../../src/server'

describe("Api v1 users test", () => {
    let server: FastifyInstance;

    beforeAll(async () => {
        server = await app();
    });

    afterAll(async () => {
        await server.close();
    });


    it("should return hello world", async () => {
        const response = await server.inject({
            method: 'GET',
            url: '/api/v1/users'
        });
        expect(response.statusCode).toBe(200);
        response.payload = JSON.parse(response.payload);
        expect(response.payload).toMatchObject({ "message": "Tu będą użytkownicy" });
    });

});