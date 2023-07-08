"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
class AccountRepositorie {
    async findAll() {
        return await prisma.account.findMany({
            select: {
                id: true,
                user: {
                    select: {
                        firstName: true,
                        id: true,
                    },
                },
            },
        });
    }
    async findById(id) {
        return await prisma.account.findUnique({
            where: {
                id: id,
            },
        });
    }
    async createAccount(accountDataForm) {
        const { userId, type, refresh_token, access_token, expires_at, token_type, scope, id_token, session_state, } = accountDataForm;
        return await prisma.account.create({
            data: {
                userId,
                type,
                refresh_token,
                access_token,
                expires_at,
                token_type,
                scope,
                id_token,
                session_state,
            },
        });
    }
    async updateAccount(id, accountDataForm) {
        const { userId, type, refresh_token, access_token, expires_at, token_type, scope, id_token, session_state, } = accountDataForm;
        return await prisma.account.update({
            where: {
                id: id,
            },
            data: {
                userId,
                type,
                refresh_token,
                access_token,
                expires_at,
                token_type,
                scope,
                id_token,
                session_state,
            },
        });
    }
    async deleteAccount(id) {
        await prisma.account.delete({
            where: {
                id: id,
            },
        });
    }
}
exports.default = new AccountRepositorie();
