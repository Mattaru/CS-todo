import { Hono } from "@hono/hono";
import { cors } from "@hono/hono/cors";
import { logger } from "@hono/hono/logger";
import * as todosController from "./controllers/todosController.js";

const app = new Hono();

app.use("/*", cors({
    origin: ["http://localhost:5173"],
    credentials: true
}));
app.use("/*", logger());

app.get("/", (c) => c.json({ message: "(\/)o.^(\/)" }));

app.get("/api/todos", todosController.showAll);
app.post("/api/todos", ...todosController.create);
app.post("/api/todos/:id", todosController.update);
app.delete("/api/todos/:id", todosController.remove);

export default app;