"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const SupervisaoController_1 = __importDefault(require("../Controllers/SupervisaoController"));
// const routerUser = Router();
const routerSupervisao = async (fastify) => {
    // SUPERVISAO
    fastify.get("/supervisoes", SupervisaoController_1.default.index);
    fastify.get('/supervisoes/:id', SupervisaoController_1.default.show);
    fastify.post("/supervisoes", SupervisaoController_1.default.store);
    fastify.delete("/supervisoes/:id", SupervisaoController_1.default.delete);
    fastify.put("/supervisoes/:id", SupervisaoController_1.default.update);
};
exports.default = routerSupervisao;
