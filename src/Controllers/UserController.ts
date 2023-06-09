import bcrypt from "bcrypt";
import { FastifyReply, FastifyRequest } from 'fastify';
import UserRepositorie from "../Repositories/UserRepositorie";

interface Escolas {
  id: string
  nome: string
}

interface Encontros {
  id: string
  nome: string
}

export interface UserData {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  cpf: string;
  dateNasc: string | Date;
  sexo: string;
  telefone: string;
  escolaridade: string;
  profissao: string;
  batizado: string;
  dateBatizado: string | Date;
  isDiscipulado: string;
  discipulador: string;
  supervisao:  string;
  celula: string  | undefined;
  escolas: Escolas[];
  encontros: Encontros[];
  estadoCivil: string;
  nomeConjuge: string;
  dateCasamento: string | Date;
  hasFilho: string;
  quantidadeFilho: number;
  endereco: string | undefined;
  dateDecisao: string | Date;
  situacao_no_reino: string;
  cargo_de_lideranca: string;
}

interface UserParams {
  id: string;
}

class UserController {

  // Fazendo uso do Fastify
  async index(request: FastifyRequest, reply: FastifyReply) {
    const users = await UserRepositorie.findAll();
    if (!users) {
      return reply.code(500).send({ error: 'Internal Server Error' });
    }
    return reply.send(users);
  }

  async show(request: FastifyRequest <{
    Params: UserParams }>, reply: FastifyReply) {
    const id = request.params.id
    const user = await UserRepositorie.findById(id);
    if (!user) {
      return reply.code(404).send({ message: "User not found!" });
    }
    return reply.code(200).send(user);
  }

  async store(request: FastifyRequest, reply: FastifyReply) {
    const userDataForm = request.body as UserData;
    const { email } = userDataForm;
    const userExist = await UserRepositorie.findByEmail(email);
    if (userExist) {
      return reply
        .code(404)
        .send({ message: "User already exist, please try other email!" });
    }

    const { password } = userDataForm;
    const saltRounds = 10;

    const hashPassword: string = bcrypt.hashSync(password, saltRounds)


    const user = await UserRepositorie.createUser({
      ...userDataForm, password: hashPassword
    });
    return reply.code(201).send(user);
  }

  async update(request: FastifyRequest <{
    Params: UserParams }>, reply: FastifyReply) {
    const id = request.params.id;
    const userDataForm = request.body as UserData;
    const user = await UserRepositorie.updateUser(id, {
      ...userDataForm,
    });
    return reply.code(202).send(user);
  }

  async delete(request: FastifyRequest <{
    Params: UserParams }>, reply: FastifyReply) {
    const id = request.params.id;
    await UserRepositorie.deleteUser(id);
    return reply.code(204).send();
  }

  // Faazendo uso do Express

  // async index(request: Request, response: Response) {
  //   const users = await UserRepositorie.findAll();
  //   if (!users) {
  //     return response.status(404);
  //   }
  //   return response.status(200).json(users);
  // }

  // async show(request: Request, response: Response) {
  //   const { id } = request.params;
  //   const user = await UserRepositorie.findById(id);
  //   if (!user) {
  //     return response.status(404).json({ message: "User not found!" });
  //   }
  //   return response.status(200).json(user);
  // }

  // async show(request: Request, response: Response) {
  //   const { id } = request.params;
  //   const user = await UserRepositorie.findById(id);
  //   if (!user) {
  //     return response.status(404).json({ message: "User not found!" });
  //   }
  //   return response.status(200).json(user);
  // }

  // async store(request: Request, response: Response) {
  //   const userDataForm: UserData = request.body;
  //   const date_create = new Date();
  //   const date_update = new Date();
  //   const { email } = userDataForm;
  //   const userExist = await UserRepositorie.findByEmail(email);
  //   if (userExist) {
  //     return response
  //       .status(404)
  //       .json({ message: "User already exist, please try other email!" });
  //   }

  //   const user = await UserRepositorie.createUser({
  //     ...userDataForm,
  //     date_create,
  //     date_update,
  //   });
  //   return response.status(201).json(user);
  // }

  // async update(request: Request, response: Response) {
  //   const { id } = request.params;
  //   const userDataForm: UserData = request.body;
  //   const date_update = new Date();
  //   const user = await UserRepositorie.updateUser(id, {
  //     ...userDataForm,
  //     date_update,
  //   });
  //   return response.status(202).json(user);
  // }

  // async delete(request: Request, response: Response) {
  //   const { id } = request.params;
  //   const user = await UserRepositorie.deleteUser(id);
  //   return response.status(204).json({ message: "User deleted" });
  // }
}

export default new UserController();
