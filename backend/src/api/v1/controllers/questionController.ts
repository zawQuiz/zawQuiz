import { FastifyReply, FastifyRequest } from 'fastify';

async function get(request:FastifyRequest,reply:FastifyReply) {
    return {
        'message':"Tu będą pytania"
    };
}

export default {
    get
}