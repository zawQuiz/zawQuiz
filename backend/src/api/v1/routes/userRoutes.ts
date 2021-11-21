import { FastifyInstance, HookHandlerDoneFunction, RegisterOptions,} from 'fastify';
import userController from '../controllers/userController';

export default function (fastify: FastifyInstance, opts: RegisterOptions, done: HookHandlerDoneFunction) {
    fastify.get('',userController.get)
    done();
}
