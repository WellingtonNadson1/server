import { PrismaClient } from "@prisma/client";
import { SupervisaoData } from "../Controllers/SupervisaoController";

const prisma = new PrismaClient();

class SupervisiaoRepositorie {
  async findAll() {
    const supervisoes = await prisma.supervisao.findMany();
    return supervisoes;
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
    const supervisao = await prisma.supervisao.create({
      data: supervisaoDataForm,
    });
    return supervisao;
  }

  async updateSupervisao(id: string, supervisaoDataForm: SupervisaoData) {
    const supervisao = await prisma.supervisao.update({
      where: {
        id: id,
      },
      data: supervisaoDataForm,
    });
    return supervisao;
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
