import { PrismaClient } from "@prisma/client";
import { UserData } from "../Controllers/UserController";

const prisma = new PrismaClient();

class UserRepositorie {
  async findAll() {
    return await prisma.user.findMany({
      select: {
        id: true,
        photoPerfil: true,
        email: true,
        firstName: true,
        lastName: true,
        // Exclua o campo cpf da seleção
        dateNasc: true,
        sexo: true,
        telefone: true,
        escolaridade: true,
        profissao: true,
        batizado: true,
        dateBatizado: true,
        isDiscipulado: true,
        discipulador: true,
        estadoCivil: true,
        nomeConjuge: true,
        dateCasamento: true,
        hasFilho: true,
        quantidadeFilho: true,
        dateDecisao: true,
        celulaId: true,
        enderecoId: true,
        supervisaoId: true,
        situacaoNoReinoId: true,
        cargoDeLiderancaId: true,
          supervisao:{
              select:{
                  nome:true
              }
          },
          celula:{
              select:{
                  nome:true
              }
          },
          situacao_no_reino:{
              select:{
                  nome:true
              }
          },
          cargo_de_lideranca:{
              select:{
                  nome:true
              }
          },
          escolas:{
              select:{
                  nome:true
              }
          },
          encontros:{
              select:{
                  nome:true
              }
          }
      }
    });
  }


  async findById(id: string){
    return await prisma.user.findUnique({
      where: {
        id: id,
      }
    })
  }

  async findByEmail(email: string){
    return await prisma.user.findFirst({
      where: {
        email: email,
      }
    })
  }

  async createUser(userDataForm: UserData) {
    const {password, supervisao, endereco, celula, escolas, encontros, situacao_no_reino, cargo_de_lideranca, ...userData} = userDataForm
    console.log( {password} )
  const user = await prisma.user.create({
    data: {
      ...userData,
      password,
      supervisao: {
          connect: {
            id: supervisao
          }
      },
      endereco: {
          connect: {
            id: endereco
          }
      },
      celula: {
          connect: {
            id: celula
          }
      },
      escolas: {
          connect: escolas.map((escolaId) => ({id: escolaId.id}))
      },
      encontros: {
          connect: encontros.map((encontId => ({id: encontId.id})))
      },
      situacao_no_reino: {
          connect: {
            id: situacao_no_reino
          }
      },
      cargo_de_lideranca: {
          connect: {
            id: cargo_de_lideranca
          }
      },
    },
  });

  return user;
  }

  async updateUser(id: string, userDataForm: UserData) {
    const {password, supervisao, endereco, celula, escolas, encontros, situacao_no_reino, cargo_de_lideranca, ...userData} = userDataForm
    return await prisma.user.update({
      where: {
        id: id,
      },
      data: {
        ...userData,
        password,
        supervisao: {
            connect: {
              id: supervisao
            }
        },
        endereco: {
            connect: {
              id: endereco
            }
        },
        celula: {
            connect: {
              id: celula
            }
        },
        escolas: {
          connect: escolas.map((escolaId) => ({id: escolaId.id}))
      },
      encontros: {
          connect: encontros.map((encontId => ({id: encontId.id})))
      },
        situacao_no_reino: {
          connect: {
            id: situacao_no_reino
          }
      },
      cargo_de_lideranca: {
          connect: {
            id: cargo_de_lideranca
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
