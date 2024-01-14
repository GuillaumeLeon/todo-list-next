"use server";

import { db } from "@/lib/server/database";
import { todos } from "@/lib/server/database/schema";
import { revalidateTag } from "next/cache";
import { z } from "zod";
import { eq } from "drizzle-orm";

const archiveSchema = z.object({
    id: z.number().nonnegative(),
});

const archiveTodo = async (data: unknown) => {
    const { id } = archiveSchema.parse(data);

    await db
        .update(todos)
        .set({ done: true, doneAt: new Date() })
        .where(eq(todos.id, id));

    revalidateTag("page");
};

export default archiveTodo;
