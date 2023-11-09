import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import router from './router';
import { RouterProvider } from 'react-router-dom'
import App from './App';
import store from './store';
import { Provider } from 'react-redux';
ReactDOM.createRoot(document.getElementById('root')).render(
  // 提供store数据
  <Provider store={store} >
    <RouterProvider router={router} >
      <App />
    </RouterProvider>
  </Provider>
)
