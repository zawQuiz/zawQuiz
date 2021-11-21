import fastify from 'fastify';
import apiV1 from './api/v1'


const startServer = async () => {
    const server = fastify();
    server.register(apiV1, { prefix: '/api/v1' });
    await server.listen(8080);
    return server;
};

export default startServer;

