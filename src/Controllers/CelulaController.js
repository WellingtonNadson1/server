"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CelulaRepositorie_1 = __importDefault(require("../Repositories/CelulaRepositorie"));
class CelulaController {
    // Fazendo uso do Fastify
    async index(request, reply) {
        const celulas = await CelulaRepositorie_1.default.findAll();
        if (!celulas) {
            return reply.code(500).send({ error: 'Internal Server Error' });
        }
        return reply.send(celulas);
    }
    async show(request, reply) {
        const id = request.params.id;
        const celula = await CelulaRepositorie_1.default.findById(id);
        if (!celula) {
            return reply.code(404).send({ message: "Célula not found!" });
        }
        return reply.code(200).send(celula);
    }
    async store(request, reply) {
        const celulaDataForm = request.body;
        const celula = await CelulaRepositorie_1.default.createCelula({
            ...celulaDataForm,
        });
        return reply.code(201).send(celula);
    }
    async update(request, reply) {
        const id = request.params.id;
        const celulaDataForm = request.body;
        const celula = await CelulaRepositorie_1.default.updateCelula(id, {
            ...celulaDataForm,
        });
        return reply.code(202).send(celula);
    }
    async delete(request, reply) {
        const id = request.params.id;
        await CelulaRepositorie_1.default.deleteCelula(id);
        return reply.code(204);
    }
}
exports.default = new CelulaController();
