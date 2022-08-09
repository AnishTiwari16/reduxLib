//we will create a global store from root Reducer

import rootReducer from '../reducers/index.reducer';
import { legacy_createStore as createStore } from 'redux';


const store = createStore(rootReducer);

export default store;