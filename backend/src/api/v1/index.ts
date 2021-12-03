import { FastifyInstance, HookHandlerDoneFunction, RegisterOptions } from 'fastify';
import { UserRoutes, QuestionRoutes, AuthRoutes } from './routes';

export default (
  fastify: FastifyInstance,
  opts: RegisterOptions,
  done: HookHandlerDoneFunction,
) => {
  fastify.register(QuestionRoutes, { prefix: 'questions' });
  fastify.register(UserRoutes, { prefix: '/users' });
  fastify.register(AuthRoutes, { prefix: 'auth' });
  done();
};
