import { PrismaClient } from "@prisma/client";
import { CelulaData } from "../Controllers/CelulaController";

const prisma = new PrismaClient();

class CelulaRepositorie {
  async findAll() {
    const celulas = await prisma.celula.findMany();
    return celulas;
  }

  async findById(id: string){
    const celulaExistById = await prisma.celula.findUnique({
      where: {
        id: id,
      }
    })
    return celulaExistById
  }

  async createCelula(celulaDataForm: CelulaData) {
    const { nome } = celulaDataForm
    const celula = await prisma.celula.create({
      data: {
        nome,
      },
    });
    return celula;
  }

  async updateCelula(id: string, celulaDataForm: CelulaData) {
    const celula = await prisma.celula.update({
      where: {
        id: id,
      },
      data: celulaDataForm,
    });
    return celula;
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
