import React, { useState } from "react";

function TodoItem({ todo, onDelete, onEdit }: { todo: { id: number; text: string }, onDelete: (id: number) => void, onEdit: (id: number, newText: string) => void }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  return (
    <li>
      {isEditing ? (
        <>
          <input
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
          />
          <button
            onClick={() => {
              onEdit(todo.id, newText);
              setIsEditing(false);
            }}
          >
            Save
          </button>
        </>
      ) : (
        <>
          {todo.text}
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={() => onDelete(todo.id)}>Delete</button>
        </>
      )}
    </li>
  );
}

export default React.memo(TodoItem);
