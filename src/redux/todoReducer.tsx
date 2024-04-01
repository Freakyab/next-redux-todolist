import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type todoPayload = {
  id: number;
  text: string;
  complete?: boolean;
};
const initialState: {
  todos: todoPayload[];
} = {
  todos: JSON.parse(localStorage.getItem("todos") || "[]"),
};

const todoReducer = createSlice({
  name: "todo",
  initialState: initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<todoPayload>) => {
      state.todos = [...state.todos, action.payload];
      JSON.stringify(localStorage.setItem("todos", JSON.stringify(state.todos)));
    },
    removeTodo: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      JSON.stringify(localStorage.setItem("todos", JSON.stringify(state.todos)));
    },
    editTodo: (state, action: PayloadAction<todoPayload>) => {
      state.todos = state.todos.map((todo) =>
        todo.id === action.payload.id ? { ...todo, text : action.payload.text, edit : false } : todo
      );
    },
    completeTodo : (state, action: PayloadAction<number>) => {
      state.todos = state.todos.map((todo) =>
        todo.id === action.payload ? { ...todo, complete : !todo.complete } : todo
      );
    },
  },
});

export const Todo = todoReducer.actions;
export default todoReducer.reducer;
