// CounterContext.js
import React, { createContext, useContext, useState } from 'react';

// Create the context
const CounterContext = createContext();

// Create a custom hook to use the context
export function useCounter() {
  return useContext(CounterContext);
}

// Create the CounterProvider component
export function CounterProvider({ children }) {
  const [counter, setCounter] = useState(0);

  const incrementCounter = () => {
    setCounter(counter + 1);
  };

  return (
    <CounterContext.Provider value={{ counter, incrementCounter }}>
      {children}
    </CounterContext.Provider>
  );
}
