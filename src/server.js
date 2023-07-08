"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import express from "express";
const cors_1 = __importDefault(require("@fastify/cors"));
const fastify_1 = __importDefault(require("fastify"));
const AccountRouters_1 = __importDefault(require("./Routers/AccountRouters"));
const CelulaRouters_1 = __importDefault(require("./Routers/CelulaRouters"));
const SupervisaoRouters_1 = __importDefault(require("./Routers/SupervisaoRouters"));
const UserRouters_1 = __importDefault(require("./Routers/UserRouters"));
const PORT = 3333;
const app = (0, fastify_1.default)({ logger: true });
const start = async () => {
    try {
        app.register(cors_1.default, {
            origin: "*",
            methods: ["GET", "POST", "PUT", "PATCH", "DELETE"]
        });
        app.register(AccountRouters_1.default);
        app.register(SupervisaoRouters_1.default);
        app.register(CelulaRouters_1.default);
        app.register(UserRouters_1.default); // tipo um middleware do express
        await app.listen({ port: PORT });
    }
    catch (err) {
        app.log.error(err);
        process.exit(1);
    }
};
start();
// Server with Express
// const hostname = "localhost";
// const app = express();
// app.use(express.json());
// app.use(routerUser);
// app.listen(PORT, hostname, () =>
//   console.log(`🚀 Server running at http://localhost:${PORT}`)
// );
