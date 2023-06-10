import React from "react";
import { useState } from "react";
function ToDoList() {
  const [list, setList] = useState([]);
  const [newTask, setNewTask] = useState("");
  let id = 0;
  const handleSubmit = (event) => {
    event.preventDefault();
    setList(
      list.concat({
        id: id++,
        label: newTask.trim(),
      })
    );
    setNewTask("");
  };
  let fullList = list.map(({ id, label }) => (
    <li key={id}>
      <span>{label}</span>
      <button
        onClick={() => {
          setList(list.filter((task) => task.id !== id));
        }}
      >
        Delete
      </button>
    </li>
  ));

  const handleChange = (event) => {
    event.preventDefault();
    setNewTask(event.target.value);
  };
  const checkState = () => {
    console.log(list);
    console.log(newTask);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Todo List</h1>
        <div>
          <input type="text" onChange={handleChange} value={newTask} />
          <div>
            <button>Submit</button>
          </div>
        </div>
        <ul>{fullList}</ul>
      </form>
      <button onClick={checkState}>check</button>
    </div>
  );
}

export default ToDoList;
