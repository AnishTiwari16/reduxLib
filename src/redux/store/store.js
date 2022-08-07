//now we will add our root reducer to the store

//we will create the global store

import rootReducer from '../reducers/index';
import { legacy_createStore as createStore } from 'redux';

const store = createStore(rootReducer);

export default store;