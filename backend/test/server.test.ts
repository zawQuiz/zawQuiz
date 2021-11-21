import { FastifyInstance } from 'fastify';
import app from '../src/index'

describe("Serwer test", () => {
    let server:FastifyInstance;
    beforeAll(async () => {
        server = await app();
    });

    afterAll(() => {
        server.close();
    });
    it("should return hello world", async () => {
        const response = await server.inject({
            method: 'GET',
            url: '/'
        });
        expect(response.statusCode).toBe(200);
        expect(response.payload).toBe('{"hello":"world"}');
    });

});