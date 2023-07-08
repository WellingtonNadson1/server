"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CelulaController_1 = __importDefault(require("../Controllers/CelulaController"));
// const routerUser = Router();
const routerCelula = async (fastify) => {
    // CELULA
    fastify.get("/celulas", CelulaController_1.default.index);
    fastify.get('/celulas/:id', CelulaController_1.default.show);
    fastify.post("/celulas", CelulaController_1.default.store);
    fastify.delete("/celulas/:id", CelulaController_1.default.delete);
    fastify.put("/celulas/:id", CelulaController_1.default.update);
};
exports.default = routerCelula;
