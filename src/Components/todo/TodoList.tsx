import { memo } from "react";
import TodoItem from "./TodoItem";

const TodoList = memo(({ todos, onDelete, onEdit }: { todos: { id: number; text: string }[], onDelete: (id: number) => void, onEdit: (id: number, newText: string) => void }) => {
  console.log("📋 TodoList Render");
  return (
    <ul>
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </ul>
  );
});

export default TodoList;
