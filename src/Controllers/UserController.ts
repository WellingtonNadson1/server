import { FastifyReply, FastifyRequest } from 'fastify';
import UserRepositorie from "../Repositories/UserRepositorie";

export interface UserData {
  email: string;
  first_name: string;
  last_name: string;
  cpf: string;
  telefone_celular: string;
  date_nascimento: string | Date;
  escolaridade: string;
  sexo: string;
  profissao: string;
  naturalidade: string;
  endereco_id: string;
  estado_civil: string;
  conjuge_name: string;
  date_casamento: string | Date;
  numero_filhos: number;
  mae_name: string;
  pai_name: string;
  date_decisao: string | Date;
  batizado: string;
  date_batismo: string | Date;
  celula_id: string;
  situacao_no_reino: string;
  date_create: string | Date;
  date_update: string | Date;
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
    const date_create = new Date();
    const date_update = new Date();
    const { email } = userDataForm;
    const userExist = await UserRepositorie.findByEmail(email);
    if (userExist) {
      return reply
        .code(404)
        .send({ message: "User already exist, please try other email!" });
    }

    const user = await UserRepositorie.createUser({
      ...userDataForm,
      date_create,
      date_update,
    });
    return reply.code(201).send(user);
  }

  async update(request: FastifyRequest <{
    Params: UserParams }>, reply: FastifyReply) {
    const id = request.params.id;
    const userDataForm = request.body as UserData;
    const date_update = new Date();
    const user = await UserRepositorie.updateUser(id, {
      ...userDataForm,
      date_update,
    });
    return reply.code(202).send(user);
  }

  async delete(request: FastifyRequest <{
    Params: UserParams }>, reply: FastifyReply) {
    const id = request.params.id;
    await UserRepositorie.deleteUser(id);
    return reply.code(204);
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
