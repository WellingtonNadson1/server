"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt_1 = __importDefault(require("bcrypt"));
const UserRepositorie_1 = __importDefault(require("../Repositories/UserRepositorie"));
class UserController {
    // Fazendo uso do Fastify
    async index(request, reply) {
        const users = await UserRepositorie_1.default.findAll();
        if (!users) {
            return reply.code(500).send({ error: 'Internal Server Error' });
        }
        return reply.send(users);
    }
    async show(request, reply) {
        const id = request.params.id;
        const user = await UserRepositorie_1.default.findById(id);
        if (!user) {
            return reply.code(404).send({ message: "User not found!" });
        }
        return reply.code(200).send(user);
    }
    async store(request, reply) {
        const userDataForm = request.body;
        const { email } = userDataForm;
        const userExist = await UserRepositorie_1.default.findByEmail(email);
        if (userExist) {
            return reply
                .code(404)
                .send({ message: "User already exist, please try other email!" });
        }
        const { password } = userDataForm;
        const saltRounds = 10;
        const hashPassword = await bcrypt_1.default.hashSync(password, saltRounds);
        const user = await UserRepositorie_1.default.createUser({
            ...userDataForm, password: hashPassword
        });
        return reply.code(201).send(user);
    }
    async update(request, reply) {
        const id = request.params.id;
        const userDataForm = request.body;
        const user = await UserRepositorie_1.default.updateUser(id, {
            ...userDataForm,
        });
        return reply.code(202).send(user);
    }
    async delete(request, reply) {
        const id = request.params.id;
        await UserRepositorie_1.default.deleteUser(id);
        return reply.code(204).send();
    }
}
exports.default = new UserController();
