'use client';

// Importing custom hook for managing todos
import { AppDispatch, RootState } from '@/redux/store';
import { useDispatch, useSelector } from 'react-redux';

// Importing todo reducer
import { Todo } from '@/redux/todoReducer';

const useTodo = () => {

    // Destructuring todo state and dispatch from redux store
    const todoDispatch = useSelector((state: RootState) => state.todos);

    // Destructuring dispatch function from redux store
    const dispatch = useDispatch<AppDispatch>();


    // Function to add new todo
    const addTodo = (text: string) => {
        dispatch(Todo.addTodo({
            id: Date.now(),
            text,
        }));
    };

    // Function to remove todo
    const removeTodo = (id: number) => {
        dispatch(Todo.removeTodo(id));
    };

    // Function to edit todo
    const editTodo = (id: number, text: string) => {
        dispatch(Todo.editTodo({
            id,
            text,
        }));
    }

    // Function to complete todo
    const completeTodo = (id: number) => {
        dispatch(Todo.completeTodo(id));
    }

    return {
        todoDispatch,
        addTodo,
        removeTodo,
        editTodo,
        completeTodo,
    };
}

export default useTodo;
