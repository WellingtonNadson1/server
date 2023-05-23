
import fastify from "fastify";

const app = fastify();
const PORT = 3333;

app.get('/', () => {
  return 'Hello World!'
})

app.listen({
  port: PORT,
}).then(() => console.log(`🚀 Server running at http://localhost:${PORT}`))