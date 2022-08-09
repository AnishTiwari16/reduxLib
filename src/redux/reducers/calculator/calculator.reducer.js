import {INCREMENT, DECREMENT,RESET} from '../../actions/index.action';

const numberChange = (initialState = 0, action) => {
    switch (action.type) {
      case INCREMENT:
        return action.payload;
  
      case DECREMENT:
        return action.payload;
  
      case RESET:
        return action.payload;
  
      default:
        return initialState;
    }
  };
  export default numberChange;