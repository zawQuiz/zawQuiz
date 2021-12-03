"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuestionRoutes = exports.UserRoutes = void 0;
var userRoutes_1 = require("./userRoutes");
Object.defineProperty(exports, "UserRoutes", { enumerable: true, get: function () { return __importDefault(userRoutes_1).default; } });
var questionRoutes_1 = require("./questionRoutes");
Object.defineProperty(exports, "QuestionRoutes", { enumerable: true, get: function () { return __importDefault(questionRoutes_1).default; } });
