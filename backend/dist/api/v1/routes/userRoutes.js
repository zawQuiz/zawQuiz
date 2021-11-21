"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const userController_1 = __importDefault(require("../controllers/userController"));
function default_1(fastify, opts, done) {
    fastify.get('', userController_1.default.get);
    done();
}
exports.default = default_1;
