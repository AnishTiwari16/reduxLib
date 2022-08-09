
//here we combine all the reducer into rootReducer

import { combineReducers } from "redux";
import numberChange from './calculator_reducer/calculator.reducer';

const rootReducer = combineReducers({
    numberChange
});

export default  rootReducer;