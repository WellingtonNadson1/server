"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AccountRepositorie_1 = __importDefault(require("../Repositories/AccountRepositorie"));
class AccountController {
    // Fazendo uso do Fastify
    async index(request, reply) {
        const account = await AccountRepositorie_1.default.findAll();
        if (!account) {
            return reply.code(500).send({ error: 'Internal Server Error' });
        }
        return reply.send(account);
    }
    async show(request, reply) {
        const id = request.params.id;
        const account = await AccountRepositorie_1.default.findById(id);
        if (!account) {
            return reply.code(404).send({ message: "Account not found!" });
        }
        return reply.code(200).send(account);
    }
    async store(request, reply) {
        const accountForm = request.body;
        const account = await AccountRepositorie_1.default.createAccount({
            ...accountForm,
        });
        return reply.code(201).send(account);
    }
    async update(request, reply) {
        const id = request.params.id;
        const accountForm = request.body;
        const account = await AccountRepositorie_1.default.updateAccount(id, {
            ...accountForm,
        });
        return reply.code(202).send(account);
    }
    async delete(request, reply) {
        const id = request.params.id;
        await AccountRepositorie_1.default.deleteAccount(id);
        return reply.code(204);
    }
}
exports.default = new AccountController();
