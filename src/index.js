import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './component/App';
import { Provider } from 'react-redux';
import store from './redux/store/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* used to wrap our app so that it can used for other containers */}
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
);
