import { FastifyReply, FastifyRequest } from 'fastify';
import { User } from '../../../models';
// import { addGoogleUser } from '../services/UserService';

async function me(request:any,reply:FastifyReply) {
    reply.send({
        'message':"OK",
        'data':await User.findById(request.user.userID)
    });
}

async function registerGoogleUser(request:FastifyRequest,reply:FastifyReply) {
    request.body;
    reply.status
    
}

export default {
    me,
    registerGoogleUser
}