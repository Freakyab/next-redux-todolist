//  Code for todoReducer
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Type for todo payload
export type todoPayload = {
  id: number;
  text: string;
  complete?: boolean;
};
const initialState: {
  todos: todoPayload[];
} = {
  todos: [],
};

// Todo reducer
const todoReducer = createSlice({
  name: "todo",
  initialState: initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<todoPayload>) => {
      state.todos = [...state.todos, action.payload];
    },
    removeTodo: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    editTodo: (state, action: PayloadAction<todoPayload>) => {
      state.todos = state.todos.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, text: action.payload.text, edit: false }
          : todo
      );
    },
    completeTodo: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.map((todo) =>
        todo.id === action.payload
          ? { ...todo, complete: !todo.complete }
          : todo
      );
    },
  },
});

// Exporting todo actions
export const Todo = todoReducer.actions;
export default todoReducer.reducer;
