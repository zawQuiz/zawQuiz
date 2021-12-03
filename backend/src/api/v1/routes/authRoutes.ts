import {  HookHandlerDoneFunction, RegisterOptions,} from 'fastify';
import  authController from '../controllers/authController';

export default function (fastify: any, opts: RegisterOptions, done: HookHandlerDoneFunction) {
  
    fastify.post('/register',authController.registerUser)
    fastify.post('/login',authController.loginUser)
    fastify.get('/check',authController.check)
    fastify.get('/google/callback',authController.loginGoogleUserCallback)

    done();
}


