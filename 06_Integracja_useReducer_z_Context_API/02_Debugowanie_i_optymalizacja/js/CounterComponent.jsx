import { useGlobalState } from './GlobalStateContext';
import { memo } from 'react';

export const CounterComponent = memo(() => {
  const { state, dispatch } = useGlobalState();

  return (
    <div>
      <h2>Counter: {state.count}</h2>
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
    </div>
  );
});
