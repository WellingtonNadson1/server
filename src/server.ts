// import express from "express";
import Fastify, { FastifyInstance } from "fastify";
import routerUser from "./Routers/UserRouters";

const PORT = 3333;

const app: FastifyInstance = Fastify( {logger: true});

const start = async () => {
  try {
    app.register(routerUser) // tipo um middleware do express
    await app.listen({ port: PORT })
  } catch (err) {
    app.log.error(err)
    process.exit(1)
  }
}
start()

// Server with Express
// const hostname = "localhost";
// const app = express();

// app.use(express.json());
// app.use(routerUser);

// app.listen(PORT, hostname, () =>
//   console.log(`🚀 Server running at http://localhost:${PORT}`)
// );
