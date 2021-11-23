import { FastifyReply } from 'fastify';

async function get(request:any,reply:FastifyReply) {
    request.body;
    reply.status
    return {
        'message':"Tu będą pytania"
    };
}

export default {
    get
}