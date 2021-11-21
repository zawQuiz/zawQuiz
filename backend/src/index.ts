import fastify from 'fastify';

const server = fastify();

server.get('/', async (request, reply) => {
  return {
    hello: 'world'
  };
});

const start = async () => {
    await server.listen(3000);
    return server;
};
start();

export default start;

