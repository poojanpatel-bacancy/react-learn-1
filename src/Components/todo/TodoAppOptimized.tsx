import { useState, useCallback } from 'react';
import TodoList from './TodoList';

function TodoAppOptimized() {
  const [todos, setTodos] = useState<{ id: number; text: string }[]>([]);
  const [input, setInput] = useState('');

  const addTodo = useCallback(() => {
    if (input.trim() !== '') {
      setTodos((prev) => [...prev, { id: Date.now(), text: input }]);
      setInput('');
    }
  }, [input]);

  const deleteTodo = useCallback((id: number) => {
    setTodos((prev) => prev.filter(todo => todo.id !== id));
  }, []);

  const editTodo = useCallback((id: number, newText: string) => {
    setTodos((prev) =>
      prev.map(todo => (todo.id === id ? { ...todo, text: newText } : todo))
    );
  }, []);

  return (
    <div>
      <h2>✅ Todo App - useCallback + Components</h2>
      <input
        type="text"
        value={input}
        placeholder="Enter task"
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={addTodo}>Add</button>

      <TodoList todos={todos} onDelete={deleteTodo} onEdit={editTodo} />
    </div>
  );
}

export default TodoAppOptimized;
