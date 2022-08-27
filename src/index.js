import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore } from 'redux';
import { Provider } from 'react-redux';


import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import rootReducer from './redux';

// khoi tao redux store
// Neu muon su dung extention, ta nhung doan ma tren github vao
const store = createStore(
  rootReducer, /* preloadedState, */
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* Ket noi redux voi react thong qua Provider */}
    <Provider store={store}>
      <App />
    </Provider>

  </React.StrictMode>
);

reportWebVitals();
