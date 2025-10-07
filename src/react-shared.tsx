import React, { useState } from 'react';
import { create } from 'zustand';
import { useNavigate } from "react-router-dom";

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

export const DynamicJump = () => {
  const [path, setPath] = useState('');
  const navigate = useNavigate();

  const handleJump = () => {
    if (path.trim()) {
      navigate(path);
    }
  };

  return (
    <div>
      <h3>Dynamic Jump</h3>
      <input
        type="text"
        value={path}
        onChange={(e) => setPath(e.target.value)}
        placeholder="输入跳转路径 (如: /about)"
        style={{ marginRight: '10px', padding: '5px' }}
      />
      <button onClick={handleJump}>跳转</button>
    </div>
  );
};
