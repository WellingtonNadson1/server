import { PrismaClient } from "@prisma/client";
import { CelulaData } from "../Controllers/CelulaController";

const prisma = new PrismaClient();

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

  async findById(id: string){
    return await prisma.celula.findUnique({
      where: {
        id: id,
      },
      select: {
        id: true,
        nome: true,
        User: {
          select: {
            firstName: true,
          }
        },
        lider: {
          select: {
            id: true,
            firstName: true,
          }
        }
      }
    })
  }

  async createCelula(celulaDataForm: CelulaData) {
    const { nome, lider, supervisao, membros } = celulaDataForm
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
          connect: membros.map((membroId) => ({id: membroId.id}))

        },
      },
    });
  }

  async updateCelula(id: string, celulaDataForm: CelulaData) {
    const { nome, lider, supervisao, membros } = celulaDataForm
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
          connect: membros.map((membroId) => ({id: membroId.id}))

        },
      },
    });

  }

  async deleteCelula(id: string) {
    await prisma.celula.delete({
      where: {
        id: id,
      },
    });
  }
}

export default new CelulaRepositorie();
