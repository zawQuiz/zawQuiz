import { FastifyInstance, HookHandlerDoneFunction, RegisterOptions,} from 'fastify';
import questionController from '../controllers/questionController';

export default function (fastify: FastifyInstance, opts: RegisterOptions, done: HookHandlerDoneFunction) {
    fastify.get('',questionController.get);
    done();
}
