"use client";

import React, { useState } from "react";

const Todo = () => {
  const [todos, setTodos] = useState([
    { id: 1, title: "Writing Next.js", completed: false },
    { id: 2, title: "Do homework", completed: false },
    { id: 3, title: "Sleeping", completed: false },
  ]);

  const [newTodoTitle, setNewTodoTitle] = useState("");

  function addTodo() {
    if (!newTodoTitle.trim()) return;

    const newTodo = {
      id: todos.length + 1,
      title: newTodoTitle,
      completed: false,
    };
    setTodos((prev) => [...prev, newTodo]);
    setNewTodoTitle("");
  }

  return (
    <>
      <h1>Todo</h1>
      <div>
        <ul>
          {todos.map((todo) => (
            <li key={todo.id} className="my-2 flex items-center gap-2">
              <span>{todo.id}.</span>
              <span>{todo.title}</span>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => {
                  setTodos((prev) =>
                    prev.map((t) =>
                      t.id === todo.id ? { ...t, completed: !t.completed } : t
                    )
                  );
                }}
              />{" "}
              <button
                className="border border-red-100 p-2 mx-3 rounded-xl bg-red-600 text-white"
                onClick={() => setTodos(todos.filter((t) => t.id !== todo.id))}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
        <input
          type="text"
          className="border p-2 rounded-2xl my-2 mx-5"
          placeholder="Add a new todo"
          value={newTodoTitle}
          onChange={(e) => setNewTodoTitle(e.target.value)}
        />
        <button className="px-3 py-2 bg-sky-400 rounded" onClick={addTodo}>
          Add
        </button>
      </div>
    </>
  );
};

export default Todo;
