import React from 'react';
import { create } from 'zustand';

interface CountStore {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
}

export const useCountStore = create<CountStore>()((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
  reset: () => set(() => ({ count: 0 })),
}));

export const CountComponent = () => {
  const { count, increment, decrement, reset } = useCountStore();

  return (
    <div>
      <h3>Count: {count}</h3>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>Reset</button>
      <button onClick={increment}>+</button>
    </div>
  );
};
