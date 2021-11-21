"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const questionController_1 = __importDefault(require("../controllers/questionController"));
function default_1(fastify, opts, done) {
    fastify.get('', questionController_1.default.get);
    done();
}
exports.default = default_1;
