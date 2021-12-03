"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = __importDefault(require("../../../src/server"));
describe("Api v1 questions test", () => {
    let server;
    beforeAll(() => __awaiter(void 0, void 0, void 0, function* () {
        server = yield (0, server_1.default)();
    }));
    afterAll(() => __awaiter(void 0, void 0, void 0, function* () {
        yield server.close();
    }));
    it("should return hello world", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield server.inject({
            method: 'GET',
            url: '/api/v1/questions'
        });
        expect(response.statusCode).toBe(200);
        response.payload = JSON.parse(response.payload);
        expect(response.payload).toMatchObject({ "message": "Tu będą pytania" });
    }));
});
