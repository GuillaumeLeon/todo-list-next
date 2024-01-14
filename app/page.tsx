import { db } from "@/lib/server/database";
import { todos } from "@/lib/server/database/schema";
import TodoForm from '@/app/TodoForm';

export default async function Home() {
    const todosList = await db.select().from(todos).orderBy(todos.id);

    return (
        <TodoForm todosList={todosList} />
    )
}
