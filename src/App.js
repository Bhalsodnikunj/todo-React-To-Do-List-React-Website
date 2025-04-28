import React, { useState } from "react";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  const handleAdd = () => {
    if (input.trim() === "") return;
    if (editIndex !== null) {
      const updatedTasks = [...tasks];
      updatedTasks[editIndex] = input;
      setTasks(updatedTasks);
      setEditIndex(null);
    } else {
      setTasks([...tasks, input]);
    }
    setInput("");
  };

  const handleDelete = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const handleEdit = (index) => {
    setInput(tasks[index]);
    setEditIndex(index);
  };

  return (
    <div className="app">
      <h1>📝 To-Do List</h1>
      <div className="input-section">
        <input
          type="text"
          placeholder="Enter task..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={handleAdd}>{editIndex !== null ? "Update" : "Add"}</button>
      </div>

      <ul className="task-list">
        {tasks.map((task, index) => (
          <li key={index}>
            <span>{task}</span>
            <div>
              <button onClick={() => handleEdit(index)}>✏️</button>
              <button onClick={() => handleDelete(index)}>🗑️</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
