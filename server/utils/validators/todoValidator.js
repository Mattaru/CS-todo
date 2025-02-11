import { z } from "zod";

export const createTodoValidator = z.object({
    name: z.string().min(3),
    done: z.boolean().default(false)
});

export const updateTodoValidator = z.object({
    name: z.string().min(3).optional(),
    done: z.boolean()
});
