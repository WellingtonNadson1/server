import { PrismaClient } from "@prisma/client";
import { UserData } from "../Controllers/UserController";

const prisma = new PrismaClient();

class UserRepositorie {
  async findAll() {
    return await prisma.user.findMany();
  }

  async findById(id: string){
    return await prisma.user.findUnique({
      where: {
        id: id,
      }
    })
  }

  async findByEmail(email: string){
    return await prisma.user.findUnique({
      where: {
        email: email,
      }
    })
  }

  async createUser(userDataForm: UserData) {
  const {supervisao, celula, escolaPrincipios, escolaFundamentos, escolaDisicipulos, escolaOracao, encontroComDeus, encontroDD, ...userData} = userDataForm
  const user = await prisma.user.create({
    data: {
      ...userData,
      supervisao: {
          connect: {
            id: supervisao
          }
      },
      celula: {
          connect: {
            id: celula
          }
      },
      escolaPrincipios: {
          connect: {
            id: escolaPrincipios
          }
      },
      escolaFundamentos: {
          connect: {
            id: escolaFundamentos
          }
      },
      escolaDisicipulos: {
          connect: {
            id: escolaDisicipulos
          }
      },
      escolaOracao: {
          connect: {
            id: escolaOracao
          }
      },
      encontroComDeus: {
          connect: {
            id: encontroComDeus
          }
      },
      encontroDD: {
          connect: {
            id: encontroDD
          }
      },
    },
  });

  return user;
  }

  async updateUser(id: string, userDataForm: UserData) {
    const {supervisao, celula, escolaPrincipios, escolaFundamentos, escolaDisicipulos, escolaOracao, encontroComDeus, encontroDD, ...userData} = userDataForm
    return await prisma.user.update({
      where: {
        id: id,
      },
      data: {
        ...userData,
        supervisao: {
            connect: {
              id: supervisao
            }
        },
        celula: {
            connect: {
              id: celula
            }
        },
        escolaPrincipios: {
            connect: {
              id: escolaPrincipios
            }
        },
        escolaFundamentos: {
            connect: {
              id: escolaFundamentos
            }
        },
        escolaDisicipulos: {
            connect: {
              id: escolaDisicipulos
            }
        },
        escolaOracao: {
            connect: {
              id: escolaOracao
            }
        },
        encontroComDeus: {
            connect: {
              id: encontroComDeus
            }
        },
        encontroDD: {
            connect: {
              id: encontroDD
            }
        },
      },
  });
  }

  async deleteUser(id: string) {
    return await prisma.user.delete({
      where: {
        id: id,
      },
    });
  }
}

export default new UserRepositorie();
