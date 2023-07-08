"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AccountController_1 = __importDefault(require("../Controllers/AccountController"));
const routerAccount = async (fastify) => {
    // SUPERVISAO
    fastify.get("/account", AccountController_1.default.index);
    fastify.get('/account/:id', AccountController_1.default.show);
    fastify.post("/account", AccountController_1.default.store);
    fastify.delete("/account/:id", AccountController_1.default.delete);
    fastify.put("/account/:id", AccountController_1.default.update);
};
exports.default = routerAccount;
