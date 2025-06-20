import { useState } from "react";

function TodoAppOneComponent() {
  const [todos, setTodos] = useState<{ id: number; text: string }[]>([]);
  const [input, setInput] = useState('');
  const [editId, setEditId] = useState<number | null>(null);
  const [editText, setEditText] = useState('');

  const addTodo = () => {
    debugger;
    if (input.trim() !== '') {
      console.log('addTodo', todos);
      setTodos([...todos, { id: Date.now(), text: input }]);
      console.log(todos);
      setInput('');
    }
  };

  const deleteTodo = (id: number) => {
    debugger;
    console.log(todos);
    setTodos(todos.filter(todo => todo.id !== id));
    console.log(todos);
  };

  const startEdit = (id: number, text: string) => {
    setEditId(id);
    setEditText(text);
  };

  const saveEdit = () => {
    debugger;
    console.log(todos);
    setTodos(todos.map(todo =>
      todo.id === editId ? { ...todo, text: editText } : todo
    ));
    console.log(todos);
    setEditId(null);
    setEditText('');
  };

  return (
    <div>
      <h2>Todo App - One Component</h2>
      <input
        type="text"
        value={input}
        placeholder="Enter task"
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={addTodo}>Add</button>

      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            {editId === todo.id ? (
              <>
                <input
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                />
                <button onClick={saveEdit}>Save</button>
              </>
            ) : (
              <>
                {todo.text}
                <button onClick={() => startEdit(todo.id, todo.text)}>Edit</button>
                <button onClick={() => deleteTodo(todo.id)}>Delete</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoAppOneComponent;
