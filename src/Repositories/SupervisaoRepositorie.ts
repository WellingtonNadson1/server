import { PrismaClient } from "@prisma/client";
import { SupervisaoData } from "../Controllers/SupervisaoController";

const prisma = new PrismaClient();

class SupervisiaoRepositorie {
  async findAll() {
    return await prisma.supervisao.findMany({
      select: {
        id: true,
        nome: true,
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

  async findById(id: string){
    const supervisaoExistById = await prisma.supervisao.findUnique({
      where: {
        id: id,
      }
    })
    return supervisaoExistById
  }

  async createSupervisao(supervisaoDataForm: SupervisaoData) {
    const { nome, supervisor, celulas, membros } = supervisaoDataForm
    return await prisma.supervisao.create({
      data: {
        nome,
        supervisor: {
          connect: {
            id: supervisor.id
          }
        },
        celulas: {
          connect: celulas.map((celulaId) => ({id: celulaId.id}))
        },
        User: {
          connect: membros.map((membroId) => ({id: membroId.id}))

        },
      },
    });
  }

  async updateSupervisao(id: string, supervisaoDataForm: SupervisaoData) {
    const { nome, supervisor, celulas, membros } = supervisaoDataForm
    return await prisma.supervisao.update({
      where: {
        id: id,
      },
      data: {
        nome,
        supervisor: {
          connect: {
            id: supervisor.id
          }
        },
        celulas: {
          connect: celulas.map((celulaId) => ({id: celulaId.id}))
        },
        User: {
          connect: membros.map((membroId) => ({id: membroId.id}))

        },
      },
    });
  }

  async deleteSupervisao(id: string) {
    await prisma.supervisao.delete({
      where: {
        id: id,
      },
    });
  }
}

export default new SupervisiaoRepositorie();
