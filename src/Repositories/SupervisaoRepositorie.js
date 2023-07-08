"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
class SupervisiaoRepositorie {
    async findAll() {
        return await prisma.supervisao.findMany({
            select: {
                id: true,
                nome: true,
                cor: true,
                supervisor: {
                    select: {
                        id: true,
                        firstName: true,
                    }
                },
                celulas: {
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
        const supervisaoExistById = await prisma.supervisao.findUnique({
            where: {
                id: id,
            },
            select: {
                id: true,
                nome: true,
                cor: true,
                supervisor: {
                    select: {
                        id: true,
                        firstName: true,
                        photoPerfil: true,
                    }
                },
                celulas: {
                    select: {
                        id: true,
                        nome: true,
                        lider: {
                            select: {
                                id: true,
                                firstName: true,
                            }
                        }
                    }
                },
                User: {
                    select: {
                        id: true,
                        firstName: true,
                        photoPerfil: true,
                    }
                },
            }
        });
        return supervisaoExistById;
    }
    async createSupervisao(supervisaoDataForm) {
        const { nome, cor, supervisor, celulas, membros } = supervisaoDataForm;
        return await prisma.supervisao.create({
            data: {
                nome,
                cor,
                supervisor: {
                    connect: {
                        id: supervisor.id
                    }
                },
                celulas: {
                    connect: celulas.map((celulaId) => ({ id: celulaId.id }))
                },
                User: {
                    connect: membros.map((membroId) => ({ id: membroId.id }))
                },
            },
        });
    }
    async updateSupervisao(id, supervisaoDataForm) {
        const { nome, cor, supervisor, celulas, membros } = supervisaoDataForm;
        return await prisma.supervisao.update({
            where: {
                id: id,
            },
            data: {
                nome,
                cor,
                supervisor: {
                    connect: {
                        id: supervisor.id
                    }
                },
                celulas: {
                    connect: celulas.map((celulaId) => ({ id: celulaId.id }))
                },
                User: {
                    connect: membros.map((membroId) => ({ id: membroId.id }))
                },
            },
        });
    }
    async deleteSupervisao(id) {
        await prisma.supervisao.delete({
            where: {
                id: id,
            },
        });
    }
}
exports.default = new SupervisiaoRepositorie();
