import React, { useState } from "react";

export default function App() {
  const [todos, setTodos] = useState([]);
  // const todos = x[0];
  // const setTodos = x[1];
  // const [todos, setTodos] = x

  const addTodo = function () {
    console.log("adding todo");
    const todoInputElement = document.getElementById("todo-input");
    const newTodo = todoInputElement.value;
    const _todos = [...todos]; // later
    _todos.push(newTodo);
    setTodos(_todos);
    console.log({ todos });
  };

  console.log("rendering...");

  const todoElements = [];
  const deleteTodo = function (idx) {
    console.log("delete");
    const _todos = [...todos]; // later
    _todos.splice(idx, 1);
    setTodos(_todos);
  };

  for (let i = 0; i < todos.length; i++) {
    const todoText = todos[i];
    todoElements.push(
      <div id={`todo-${i}`} className="todo">
        <span>{todoText}</span>
        <button
          onClick={() => {
            deleteTodo(i);
          }}
        >
          Delete
        </button>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="inputcontainer">
        <h1>My To-Do List </h1>
        <div className="input-n-btn">
          <input
            id="todo-input"
            type="text"
            placeholder="Add a New To-Do......"
          />
          <button onClick={addTodo} className="btn">
            Add
          </button>
        </div>
        <div id="todo-container">{todoElements}</div>
      </div>
    </div>
  );
}
