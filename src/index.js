import React from 'react';
import ReactDOM from 'react-dom/client';
import HomeContainer from './container/HOME/HomeContainer'
import store from './redux/store/store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store = {store}>
    <HomeContainer />
    </Provider>
  </React.StrictMode>
);
