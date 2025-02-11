import postgres from "postgres";

const sql = postgres();

export const getAll = async () => {
    return await sql`SELECT * FROM todos`;
};

export const create = async (todo) => {
    const result = await sql`INSERT INTO todos (name, done) VALUES (${todo.name}, ${todo.done}) RETURNING *`;
    return result[0];
};

export const update = async (id) => {
    const result = await sql`UPDATE todos SET done = not done WHERE id = ${id} RETURNING *`;
    return result[0];
};

export const remove = async (id) => {
    const result = await sql`DELETE FROM todos WHERE id = ${id} RETURNING *`;
    return result[0];
};
