"use server";

import { db } from "@/lib/server/database";
import { todos } from "@/lib/server/database/schema";
import { revalidateTag } from "next/cache";
import { z } from "zod";
import { eq } from "drizzle-orm";

const deleteTodoSchema = z.object({
    id: z.number().nonnegative(),
});

const deleteTodo = async (data: unknown) => {
    const { id } = deleteTodoSchema.parse(data);

    const newTodo = await db.delete(todos).where(eq(todos.id, id));

    revalidateTag("page");

    return newTodo;
};

export default deleteTodo;
