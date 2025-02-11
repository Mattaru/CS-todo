import * as todosRepo from "../repositorys/todosRepository.js";
import { createTodoValidator, updateTodoValidator } from "../utils/validators/todoValidator.js";
import { zValidator } from "zValidator";

export const showAll = async (c) => {
    const todos = await todosRepo.getAll();
    return c.json(todos);
};

export const create = [
    zValidator("json", createTodoValidator),
    async (c) => {
        const data = await c.req.valid("json");
        const todo = await todosRepo.create(data);
        return c.json(todo);
    }
];

export const update = async (c) => {
        const todo = await todosRepo.update(c.req.param("id"));
        return c.json(todo);
};

export const remove = async (c) => {
    const todo = await todosRepo.remove(c.req.param("id"));
    return c.json(todo);
};
