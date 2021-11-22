import { FastifyReply, FastifyRequest } from 'fastify';

async function get(request:FastifyRequest,reply:FastifyReply) {
    request.body;
    reply.status
    return {
        'message':"Tu będą użytkownicy"
    };
}

export default {
    get
}