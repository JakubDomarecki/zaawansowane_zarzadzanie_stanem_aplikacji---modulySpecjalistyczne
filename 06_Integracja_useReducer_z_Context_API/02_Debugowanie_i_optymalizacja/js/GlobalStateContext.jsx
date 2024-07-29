import { createContext, useReducer, useContext, useMemo } from 'react';

const initialState = {
  count: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      return state;
  }
};

const GlobalStateContext = createContext();

export const GlobalStateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
 const value = useMemo(() =>( {state, dispatch}), [state])

  return <GlobalStateContext.Provider value={value}>{children}</GlobalStateContext.Provider>;
};

export const useGlobalState = () => useContext(GlobalStateContext);
