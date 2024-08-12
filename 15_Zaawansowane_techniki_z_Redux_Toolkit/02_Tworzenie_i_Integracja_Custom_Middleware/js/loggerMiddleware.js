export const loggerMiddleware = (store) => (next) => (action) => {
    console.log(`[${new Date().toISOString()}] Dispatching: `, action);
    let result = next(action);
    console.log(`[${new Date().toISOString()}] Next State: `, store.getState());
    return result;
  };