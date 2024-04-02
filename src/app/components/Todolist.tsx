"use client";
import React, { useState } from "react";
import { animate, motion } from "framer-motion";
import useTodo from "@/redux/dispatch/useTodo";
import { IoMdAddCircle, IoIosRemove } from "react-icons/io";
import { FaCircle, FaRegCheckCircle, FaMoon } from "react-icons/fa";
import { RiEdit2Line } from "react-icons/ri";
import { IoSunnyOutline } from "react-icons/io5";

const TodoList = () => {
  const { todoDispatch, addTodo, removeTodo, editTodo, completeTodo } =
    useTodo();
  const [newTodoText, setNewTodoText] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  const handleAddTodo = (e: React.FormEvent) => {
    e.preventDefault();
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
    setNewTodoText(
      todoDispatch.todos.find((todo) => todo.id === id)?.text || ""
    );
    removeTodo(id);
  };

  const handleCompleteTodo = (id: number) => {
    completeTodo(id);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div
      className={`min-h-screen flex flex-col justify-center items-center ${
        darkMode
          ? "bg-gray-900 text-white"
          : "bg-gradient-to-b from-pink-500 to-rose-500 text-gray-800"
      }`}>
      <div className="flex items-center justify-center mt-10 gap-3">
        <h1 className="text-4xl font-bold uppercase">Todo List</h1>
        <motion.button
          onClick={toggleDarkMode}
          animate={{ rotate: darkMode ? 180 : 0 }}>
          {darkMode ? (
            <IoSunnyOutline className="text-2xl text-yellow-500" />
          ) : (
            <FaMoon className="text-2xl text-gray-950" />
          )}
        </motion.button>
      </div>
      <div className="w-1/2">
        <div
          className={`rounded-md shadow-lg p-4 mt-8 ${
            darkMode ? "bg-gray-800" : "bg-white"
          } w-full`}>
          <form onSubmit={handleAddTodo} className="flex items-center">
            <motion.button type="submit" animate={{ rotate: 360 }}>
              <IoMdAddCircle
                className={`text-3xl ${
                  darkMode ? "text-blue-300" : "text-pink-500"
                }`}
              />
            </motion.button>
            <input
              type="text"
              placeholder="Add new todo"
              value={newTodoText}
              onChange={(e) => setNewTodoText(e.target.value)}
              className={`p-2 m-3 outline-none flex-grow ${
                darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-800"
              }`}
            />
          </form>
        </div>
        <div className="mt-8 w-full">
          {todoDispatch.todos.map((todo) => (
            <motion.div
              key={todo.id}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.2 } }}
              className={`flex items-center justify-between gap-3 rounded-md shadow-md p-4 mb-4 ${
                todo.complete ? "line-through" : ""
              } ${
                darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-800"
              }`}>
              <button onClick={() => handleCompleteTodo(todo.id)}>
                {todo.complete ? (
                  <FaRegCheckCircle className="text-green-500 text-2xl" />
                ) : (
                  <FaCircle className="text-pink-500 text-2xl" />
                )}
              </button>
              <p className="flex-grow px-2">{todo.text}</p>
              <div className="flex items-center">
                <button onClick={() => handleEditTodo(todo.id)}>
                  <RiEdit2Line className="text-blue-500 text-2xl" />
                </button>
                <motion.button
                  onClick={() => handleRemoveTodo(todo.id)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}>
                  <IoIosRemove className="text-red-500 text-2xl" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TodoList;
