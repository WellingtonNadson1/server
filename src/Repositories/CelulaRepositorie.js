"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
class CelulaRepositorie {
    async findAll() {
        return await prisma.celula.findMany({
            select: {
                id: true,
                nome: true,
                lider: {
                    select: {
                        id: true,
                        firstName: true,
                    }
                },
                Supervisao: {
                    select: {
                        id: true,
                        nome: true,
                    }
                },
                User: {
                    select: {
                        id: true,
                        firstName: true,
                    }
                },
            }
        });
    }
    async findById(id) {
        return await prisma.celula.findUnique({
            where: {
                id: id,
            }
        });
    }
    async createCelula(celulaDataForm) {
        const { nome, lider, supervisao, membros } = celulaDataForm;
        return await prisma.celula.create({
            data: {
                nome,
                lider: {
                    connect: {
                        id: lider.id
                    }
                },
                Supervisao: {
                    connect: {
                        id: supervisao.id
                    }
                },
                User: {
                    connect: membros.map((membroId) => ({ id: membroId.id }))
                },
            },
        });
    }
    async updateCelula(id, celulaDataForm) {
        const { nome, lider, supervisao, membros } = celulaDataForm;
        return await prisma.celula.update({
            where: {
                id: id,
            },
            data: {
                nome,
                lider: {
                    connect: {
                        id: lider.id
                    }
                },
                Supervisao: {
                    connect: {
                        id: supervisao.id
                    }
                },
                User: {
                    connect: membros.map((membroId) => ({ id: membroId.id }))
                },
            },
        });
    }
    async deleteCelula(id) {
        await prisma.celula.delete({
            where: {
                id: id,
            },
        });
    }
}
exports.default = new CelulaRepositorie();
