"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const SupervisaoRepositorie_1 = __importDefault(require("../Repositories/SupervisaoRepositorie"));
class SupervisaoController {
    // Fazendo uso do Fastify
    async index(request, reply) {
        const supervisoes = await SupervisaoRepositorie_1.default.findAll();
        if (!supervisoes) {
            return reply.code(500).send({ error: 'Internal Server Error' });
        }
        return reply.code(200).send(supervisoes);
    }
    async show(request, reply) {
        const id = request.params.id;
        const supervisao = await SupervisaoRepositorie_1.default.findById(id);
        if (!supervisao) {
            return reply.code(404).send({ message: "Supervisao not found!" });
        }
        return reply.code(200).send(supervisao);
    }
    async store(request, reply) {
        const supervisaoDataForm = request.body;
        const supervisao = await SupervisaoRepositorie_1.default.createSupervisao({
            ...supervisaoDataForm,
        });
        return reply.code(201).send(supervisao);
    }
    async update(request, reply) {
        const id = request.params.id;
        const supervisaoDataForm = request.body;
        const supervisao = await SupervisaoRepositorie_1.default.updateSupervisao(id, {
            ...supervisaoDataForm,
        });
        return reply.code(202).send(supervisao);
    }
    async delete(request, reply) {
        const id = request.params.id;
        await SupervisaoRepositorie_1.default.deleteSupervisao(id);
        return reply.code(204);
    }
}
exports.default = new SupervisaoController();
