"use server";

import { db } from "@/lib/server/database";
import { todos } from "@/lib/server/database/schema";
import { revalidateTag } from "next/cache";
import { addTodoSchema } from "../schemas/AddTodoSchema";

const addTodo = async (data: unknown) => {
    const validated = addTodoSchema.parse(data);

    const newTodo = await db.insert(todos).values(validated).returning();

    revalidateTag("page");

    return newTodo;
};

export default addTodo;
