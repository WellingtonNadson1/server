import { FastifyInstance } from 'fastify';
import UserController from "../Controllers/UserController";

// const routerUser = Router();
const routerUser = async (fastify: FastifyInstance) => {
  // USERS
  fastify.get("/users", UserController.index);
  fastify.get('/users/:id', UserController.show);
  fastify.post("/users", UserController.store);
  fastify.delete("/users/:id", UserController.delete);
  fastify.put("/users/:id", UserController.update);
  // fastify.post("/login", UserController.findCredentials);
};

export default routerUser;
