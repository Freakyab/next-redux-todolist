
"use client";
import { store } from '@/redux/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import { persistor } from '@/redux/store';

function ReduxProvider({ children }: { children: React.ReactNode }) {
  return <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>

    {children}
    </PersistGate>
    </Provider>;
}

export default ReduxProvider;