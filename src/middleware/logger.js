
const logger = (store) => (next) => (action) => {
    console.group(action.type);

    console.log('My Action:', action);

    const returnValue = next(action);

    console.log('My New state: ', store.getState());

    console.groupEnd();
    
    return returnValue;
  };
  
  export default logger;