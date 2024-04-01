"use client";

import React, { useState } from "react";
import useTodo from "@/redux/dispatch/useTodo";

const TodoList = () => {
  const { todoDispatch, addTodo, removeTodo, editTodo ,completeTodo} = useTodo();
  const [newTodoText, setNewTodoText] = useState("");

  const handleAddTodo = () => {
    if (newTodoText.trim() !== "") {
      addTodo(newTodoText);
      setNewTodoText("");
    }
  };

  const handleRemoveTodo = (id: number) => {
    removeTodo(id);
  };

  const handleEditTodo = (id: number) => {
    setNewTodoText(
      todoDispatch.todos.find((todo) => todo.id === id)?.text || ""
    );
    removeTodo(id);
    editTodo(id, newTodoText);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        placeholder="Add new todo"
        value={newTodoText}
        onChange={(e) => setNewTodoText(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add Todo</button>
      <ul>
        {todoDispatch.todos.map((todo) => (
          <li key={todo.id}>
            <p
                className={`${todo.complete ? "line-through" : ""} p-3 m-3 border border-gray-300 rounded-lg `}
            >

            {todo.text}
            </p>
            <button onClick={() => handleRemoveTodo(todo.id)}>Remove</button>
            <button onClick={() => handleEditTodo(todo.id)}>Edit</button>
            <button onClick={() => completeTodo(todo.id)}>Complete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
