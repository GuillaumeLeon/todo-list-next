import { todos } from "@/lib/server/database/schema";
import { BadgeX, Check } from "lucide-react";
import deleteTodo from "./actions/deleteTodo";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import archiveTodo from "./actions/archiveTodo";

export const Todo = ({ todo }: { todo: typeof todos.$inferSelect }) => {
    const handleDelete = async () => {
        await deleteTodo({ id: todo.id });
    };

    const handleUpdate = async () => {
        await archiveTodo({ id: todo.id });
    };

    return (
        <div className="flex gap-2 m-2">
            <Button variant="outline" size="icon" onClick={handleDelete}>
                <BadgeX size={16} />
            </Button>
            <Button className={
                cn({
                    'disabled': todo.done
                })
            } variant="outline" size="icon" disabled={!!todo.done} onClick={handleUpdate}>
                <Check size={16} />
            </Button>
            <div className={cn({
                'line-through': todo.done
            })}>
                {todo.content}
            </div>
        </div>
    );
};