import jsonServer from "json-server";
import { createRequire } from "module";
const require = createRequire(import.meta.url);

const server = jsonServer.create();
const router = jsonServer.router(require.resolve("api/db.json"));
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

export default server;
