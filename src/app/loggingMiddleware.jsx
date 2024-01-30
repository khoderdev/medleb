const loggingMiddleware = (store) => (next) => (action) => {
    // Log the action type
    console.log('Dispatching action:', action.type);
    
    // Log the current state before the action is processed
    console.log('Current state:', store.getState());
    
    // Continue with the action dispatch
    const result = next(action);
  
    // Log the updated state after the action is processed
    console.log('Next state:', store.getState());
  
    return result;
  };
  
  export default loggingMiddleware;
  