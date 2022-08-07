//will contain one root reducer only so we will combine all the different reducers in one!!!

import changeNumber from '../reducers/index.reducer';
import { combineReducers } from 'redux'; //used to combine all reducers in one

const rootReducer = combineReducers({
    //different reducers
    changeNumber    // as here we only have one reducer
});

export default rootReducer;