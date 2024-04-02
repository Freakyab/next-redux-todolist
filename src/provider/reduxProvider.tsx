"use client";

// Importing custom hook for managing todos
import { store } from "@/redux/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "@/redux/store";

// ReduxProvider component
function ReduxProvider({ children }: { children: React.ReactNode }) {
  return (
    /* Provider component for redux state management */

    <Provider store={store}>
      {/* PersistGate component for persisting redux state */}
      
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
}

export default ReduxProvider;
