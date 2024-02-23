'use client'
import React from 'react';
import { Provider } from 'react-redux'; // Rename 'Provider' to 'ReduxProvider'
import { store } from './Store';

export default function ReduxProvider({ children }) {
  
return (
    <Provider store={store}>
      {children}
    </Provider>
  );
}
