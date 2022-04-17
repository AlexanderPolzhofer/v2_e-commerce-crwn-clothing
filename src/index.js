import React from 'react';
import ReactDOM from 'react-dom';

import './index.scss';

import { BrowserRouter } from 'react-router-dom';
import { UserContextProvider } from './components/contexts/User.context';
import App from './App';

import reportWebVitals from './reportWebVitals';
import { CategoriesProvider } from './components/contexts/Categories.context';
import { CartContextProvider } from './components/contexts/Cart.context';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserContextProvider>
        <CategoriesProvider>
          <CartContextProvider>
            <App />
          </CartContextProvider>
        </CategoriesProvider>
      </UserContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
