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
            todo.done = todo.done === "on";
            const result = await todoApi.create(todo);
            if ("success" in result) return {"error": result.error.issues[0].message};
            todosState.push(result);
        },
        update: async (id) => {
            const result = await todoApi.update(id);
            const foundTodo = todosState.find(t => t.id === id);
            foundTodo.done = !foundTodo.done; 
        },
        remove: async (id) => {
            await todoApi.remove(id);
            todosState = todosState.filter(t => t.id !== id);
        }
    };
};
