import * as todoApi from "../apis/todos-api.js";

let todosState = $state([]);

export const useTodoState = () => {
    return {
        get todos () {
            return todosState;
        },
        fetchTodos: async () => {
            todosState = await todoApi.readTodos();
        },
        add: async (todo) => {
            todo.done === "on" ? todo.done = true : todo.done = false;
            const result = await todoApi.create(todo);
            if ("successs" in result) return;
            todosState.push(result);
        },
        update: async (id) => {
            const result = await todoApi.update(id);
            if ("successs" in result) return;
            const foundTodo = todosState.find(t => t.id === id);
            foundTodo.done = !foundTodo.done; 
        },
        remove: async (id) => {
            await todoApi.remove(id);
            todosState = todosState.filter(t => t.id !== id);
        }
    };
};
