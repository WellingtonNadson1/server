import { PrismaClient } from "@prisma/client";
import { SupervisaoData } from "../Controllers/SupervisaoController";

const prisma = new PrismaClient();

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

  async findById(id: string){
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
    })
    return supervisaoExistById
  }

  async createSupervisao(supervisaoDataForm: SupervisaoData) {
    const { nome, cor, supervisor, celulas, membros } = supervisaoDataForm
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
          connect: celulas.map((celulaId) => ({id: celulaId.id}))
        },
        User: {
          connect: membros.map((membroId) => ({id: membroId.id}))

        },
      },
    });
  }

  async updateSupervisao(id: string, supervisaoDataForm: SupervisaoData) {
    const { nome, cor, supervisor, celulas, membros } = supervisaoDataForm
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
