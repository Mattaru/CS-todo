import { PUBLIC_API_URL } from "$env/static/public";

export const readTodos = async () => {
    const response = await fetch(`${PUBLIC_API_URL}/api/todos`);
    return await response.json();
}

export const create = async (todo) => {
    const response = await fetch(`${PUBLIC_API_URL}/api/todos`, {
        headers: {
            "Content-Type": "application/json" 
        },
        method: "POST",
        body: JSON.stringify(todo)
    });

    return await response.json();
};

export const update = async (id) => {
    const response = await fetch(`${PUBLIC_API_URL}/api/todos/${id}`, {
        method: "POST"
    });

    return await response.json();
};

export const remove = async (id) => {
    const response = await fetch(`${PUBLIC_API_URL}/api/todos/${id}`, {
        method: "DELETE"
    });

    return await response.json();
};
