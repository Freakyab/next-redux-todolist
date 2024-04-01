import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todoReducer";
// import { persistStore, persistReducer } from 'redux-persist'
// import storage from 'redux-persist/lib/storage'

export const store = configureStore({
    reducer: {
        todos: todoReducer,
    },
    });

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
