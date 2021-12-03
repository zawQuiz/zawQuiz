"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const routes_1 = require("./routes");
exports.default = (fastify, opts, done) => {
    fastify.register(routes_1.QuestionRoutes, { prefix: 'questions' });
    fastify.register(routes_1.UserRoutes, { prefix: 'users' });
    done();
};
