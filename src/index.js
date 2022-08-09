import React from 'react';
import ReactDOM from 'react-dom/client';
import Index from './component/HomeComponents/index';
import store from './redux/store/store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store = {store}>
    <Index />
    </Provider>
  </React.StrictMode>
);
