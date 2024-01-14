'use client';

import React, { useState } from 'react';
import { todos } from '@/lib/server/database/schema';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useForm } from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod"
import addTodo from '@/app/actions/addTodo';
import { addTodoSchema } from './schemas/AddTodoSchema';
import { Todo } from './Todo';
import { cn } from '@/lib/utils';

export default function TodoForm({ todosList }: { todosList: typeof todos.$inferSelect[] }) {
    const [loading, setLoading] = useState(false);

    const form = useForm({
        resolver: zodResolver(addTodoSchema),
        defaultValues: {
            content: '',
        }
    });

    const handleSubmit = async (data: unknown) => {
        setLoading(true);

        await addTodo(data);

        setLoading(false);

        form.reset();
    }

    return (
        <div>
            <ul className="py-2">
                {todosList.map((todo) => (
                    <li key={todo.id}>
                        <Todo todo={todo} />
                    </li>
                ))}
            </ul>
            <div className="w-[400px] flex flex-col">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
                        <FormField
                            control={form.control}
                            name="content"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <Input autoComplete='off' placeholder="my new todo" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button type="submit" className={cn({ disabled: loading })} disabled={loading}>Submit</Button>
                    </form>
                </Form>
            </div>
        </div>
    );
}
