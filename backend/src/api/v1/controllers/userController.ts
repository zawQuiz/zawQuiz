import { FastifyReply, FastifyRequest } from 'fastify';

async function get(request:FastifyRequest,reply:FastifyReply) {
    return {
        'message':"Tu będą użytkownicy"
    };
}

export default {
    get
}