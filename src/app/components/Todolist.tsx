"use client";

import React, { useState } from "react";
import useTodo from "@/redux/dispatch/useTodo";

const TodoList = () => {
  const { todoDispatch, addTodo, removeTodo, editTodo, completeTodo, setTodo } =
    useTodo();

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
    editTodo(id, newTodoText);
    setNewTodoText(todoDispatch.todos.find((todo) => todo.id === id)?.text || ""  );
    removeTodo(id);
  };

  const handleCompleteTodo = (id: number) => {
    completeTodo(id);
  };

  return (
    <div className="">
      <h1>Todo List</h1>
      <input
        type="text"
        placeholder="Add new todo"
        value={newTodoText}
        onChange={(e) => setNewTodoText(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add Todo</button>
      <div>
        {todoDispatch.todos
          .map((todo) => (
            <div key={todo.id}>
              <span
                className={`${
                  todo.complete ? "line-through" : ""
                } p-3 m-3 border border-gray-300 rounded-lg `}>
                {todo.text}
              </span>
              <button onClick={() => handleRemoveTodo(todo.id)}>Remove</button>
              <button onClick={() => handleEditTodo(todo.id)}>Edit</button>
              <button onClick={() => handleCompleteTodo(todo.id)}>
                Complete
              </button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default TodoList;
