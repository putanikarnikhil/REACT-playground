
import { useState } from "react";
import { v4 as uuid4 } from "uuid";

export default function TodoList() {
  const [todos, setTodos] = useState([{ task: "Sample Task", id: uuid4(), completed: false }]);
  const [newTodo, setNewTodo] = useState("");
  const [editId, setEditId] = useState(null);
  const [editValue, setEditValue] = useState("");

  const addNewTask = () => {
    if (newTodo.trim() === "") return;
    const newTask = {
      task: newTodo,
      id: uuid4(),
      completed: false,
    };
    setTodos((prev) => [...prev, newTask]);
    setNewTodo("");
  };

  const updateTodovalue = (e) => setNewTodo(e.target.value);

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleEdit = (id, task) => {
    setEditId(id);
    setEditValue(task);
  };

  const saveEdit = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, task: editValue } : todo
      )
    );
    setEditId(null);
    setEditValue("");
  };

  const upperCaseAll = () => {
    setTodos((prev) =>
      prev.map((todo) => ({ ...todo, task: todo.task.toUpperCase() }))
    );
  };

  const clearAll = () => {
    setTodos([]);
  };

  return (
    <div style={{ padding: "2rem", maxWidth: "600px", margin: "auto", fontFamily: "Arial" }}>
      <h2 style={{ textAlign: "center", marginBottom: "1rem", color: "#222" }}>📝 My Todo List</h2>

      <div style={{ display: "flex", gap: "1rem", marginBottom: "1rem" }}>
        <input
          placeholder="Add a Task"
          value={newTodo}
          onChange={updateTodovalue}
          style={{
            flex: 1,
            padding: "10px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            fontSize: "16px",
          }}
        />
        <button
          onClick={addNewTask}
          style={{
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            padding: "10px 20px",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          ➕ Add
        </button>
      </div>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "10px",
              marginBottom: "10px",
              border: "1px solid #ddd",
              borderRadius: "8px",
              backgroundColor: todo.completed ? "#e6ffe6" : "#fff",
              boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
            }}
          >
            <div style={{ flex: 1 }}>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleComplete(todo.id)}
              />
              {editId === todo.id ? (
                <input
                  value={editValue}
                  onChange={(e) => setEditValue(e.target.value)}
                  style={{
                    marginLeft: "1rem",
                    padding: "5px",
                    fontSize: "16px",
                    borderRadius: "6px",
                    border: "1px solid #aaa",
                    width: "60%",
                  }}
                />
              ) : (
                <span
                  style={{
                    marginLeft: "1rem",
                    textDecoration: todo.completed ? "line-through" : "none",
                    color: todo.completed ? "#888" : "#000",
                  }}
                >
                  {todo.task}
                </span>
              )}
            </div>
            <div style={{ display: "flex", gap: "0.5rem" }}>
              {editId === todo.id ? (
                <button
                  onClick={() => saveEdit(todo.id)}
                  style={{
                    backgroundColor: "#00bcd4",
                    color: "white",
                    padding: "5px 10px",
                    border: "none",
                    borderRadius: "6px",
                    cursor: "pointer",
                  }}
                >
                  💾 Save
                </button>
              ) : (
                <button
                  onClick={() => handleEdit(todo.id, todo.task)}
                  style={{
                    backgroundColor: "#ffc107",
                    color: "#000",
                    padding: "5px 10px",
                    border: "none",
                    borderRadius: "6px",
                    cursor: "pointer",
                  }}
                >
                  ✏️ Edit
                </button>
              )}
              <button
                onClick={() => deleteTodo(todo.id)}
                style={{
                  backgroundColor: "#f44336",
                  color: "white",
                  padding: "5px 10px",
                  border: "none",
                  borderRadius: "6px",
                  cursor: "pointer",
                }}
              >
                🗑️ Delete
              </button>
            </div>
          </li>
        ))}
      </ul>

      <div style={{ marginTop: "2rem", display: "flex", gap: "1rem", justifyContent: "center" }}>
        <button
          onClick={upperCaseAll}
          style={{
            backgroundColor: "#673ab7",
            color: "white",
            padding: "10px 20px",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          🔠 Uppercase All
        </button>
        <button
          onClick={clearAll}
          style={{
            backgroundColor: "#e91e63",
            color: "white",
            padding: "10px 20px",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          🧹 Clear All
        </button>
      </div>
    </div>
  );
}
