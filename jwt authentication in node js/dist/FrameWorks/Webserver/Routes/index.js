"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const UserRouter_1 = __importDefault(require("./UserRouter/UserRouter"));
const Router = (app) => {
    app.use("/", UserRouter_1.default);
};
exports.default = Router;
