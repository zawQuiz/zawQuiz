import fastify from 'fastify';
import apiV1 from './api/v1'
import configureAuth from './auth'

const startServer = async () => {
    const server = fastify();
    server.register(apiV1, { prefix: '/api/v1' });
    await configureAuth(server);
    await server.listen(8080);
    return server;
};

export default startServer;

