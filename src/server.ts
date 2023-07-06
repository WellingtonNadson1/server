// import express from "express";
import cors from "@fastify/cors";
import Fastify, { FastifyInstance } from "fastify";
import routerAccount from "./Routers/AccountRouters";
import routerCelula from "./Routers/CelulaRouters";
import routerSupervisao from "./Routers/SupervisaoRouters";
import routerUser from "./Routers/UserRouters";

const PORT = 3333;

const app: FastifyInstance = Fastify( {logger: true});

const start = async () => {
  try {
    app.register(cors, {
      origin: "*",
      methods: ["GET", "POST", "PUT", "PATCH", "DELETE"]
    })
    app.register(routerAccount)
    app.register(routerSupervisao)
    app.register(routerCelula)
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
