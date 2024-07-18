import React, { useState, useEffect } from 'react';

export const Counter = () => {
  let [count, setCount] = useState(0);

  const fetchData = async () => {
    const data = await new Promise((resolve) => setTimeout(() => resolve(10), 2000));
    setCount(prev => prev + data);
  };

  useEffect(() => {
    console.log('Counter has changed:', count);
  }, [count]);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <p>Counter: {count}</p>
      <button
        onClick={() => {
          setCount(prev => prev + 1);
        }}
      >
        Increase
      </button>
      <button onClick={() => {
          setCount(prev => prev - 1);
        }}
      >
        Decrease
      </button>
    </div>
  );
};
