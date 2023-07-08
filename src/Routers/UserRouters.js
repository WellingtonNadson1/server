"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const UserController_1 = __importDefault(require("../Controllers/UserController"));
// const routerUser = Router();
const routerUser = async (fastify) => {
    // USERS
    fastify.get("/users", UserController_1.default.index);
    fastify.get('/users/:id', UserController_1.default.show);
    fastify.post("/users", UserController_1.default.store);
    fastify.delete("/users/:id", UserController_1.default.delete);
    fastify.put("/users/:id", UserController_1.default.update);
};
exports.default = routerUser;
