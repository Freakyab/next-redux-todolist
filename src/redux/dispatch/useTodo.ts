'use client';

import { AppDispatch, RootState } from '@/redux/store';
import { useDispatch, useSelector } from 'react-redux';

import { Todo } from '@/redux/todoReducer';

const useTodo = () => {
    const todoDispatch = useSelector((state: RootState) => state.todos);
    const dispatch = useDispatch<AppDispatch>();

    const addTodo = (text: string) => {
        dispatch(Todo.addTodo({
            id: Date.now(),
            text,
        }));
    };

    const removeTodo = (id: number) => {
        dispatch(Todo.removeTodo(id));
    };

    const editTodo = (id: number, text: string) => {
        dispatch(Todo.editTodo({
            id,
            text,
        }));
    }

    const completeTodo = (id: number) => {
        dispatch(Todo.completeTodo(id));
    }

    const setTodo = (todos: { id: number; text: string; complete?: boolean }[]) => {
        dispatch(Todo.setTodo(todos));
    }

    return {
        todoDispatch,
        addTodo,
        removeTodo,
        editTodo,
        completeTodo,
        setTodo,
    };
}

export default useTodo;
