import { FastifyReply, FastifyRequest } from 'fastify';
// import { addGoogleUser } from '../services/UserService';

async function get(request:FastifyRequest,reply:FastifyReply) {
    request.body;
    reply.status
    return {
        'message':"Tu będą użytkownicy"
    };
}

async function registerGoogleUser(request:FastifyRequest,reply:FastifyReply) {
    request.body;
    reply.status
    
}

export default {
    get,
    registerGoogleUser
}