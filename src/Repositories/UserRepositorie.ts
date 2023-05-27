import { PrismaClient } from "@prisma/client";
import { UserData } from "../Controllers/UserController";

const prisma = new PrismaClient();

class UserRepositorie {
  async findAll() {
    const users = await prisma.user.findMany();
    return users;
  }

  async findById(id: string){
    const userExistById = await prisma.user.findUnique({
      where: {
        id: id,
      }
    })
    return userExistById
  }

  async findByEmail(email: string){
    const userExistByEmail = await prisma.user.findUnique({
      where: {
        email: email,
      }
    })
    return userExistByEmail
  }

  async createUser(userDataForm: UserData) {
    const user = await prisma.user.create({
      data: userDataForm,
    });
    return user;
  }

  async updateUser(id: string, userDataForm: UserData) {
    const user = await prisma.user.update({
      where: {
        id: id,
      },
      data: userDataForm,
    });
    return user;
  }

  async deleteUser(id: string) {
    await prisma.user.delete({
      where: {
        id: id,
      },
    });
  }
}

export default new UserRepositorie();
