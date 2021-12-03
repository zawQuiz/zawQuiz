import { HookHandlerDoneFunction, RegisterOptions,} from 'fastify';
import userController from '../controllers/userController';

export default function (fastify: any, opts: RegisterOptions, done: HookHandlerDoneFunction) {
    fastify.get('/me',  {
        preValidation: [fastify.authenticate]
      },userController.me)
    done();
}
