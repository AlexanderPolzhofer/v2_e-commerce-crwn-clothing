import React from 'react';
import ReactDOM from 'react-dom';

import './index.scss';

import { BrowserRouter } from 'react-router-dom';
import { UserContextProvider } from './components/contexts/UserContext';
import App from './App';

import reportWebVitals from './reportWebVitals';
import { ProductsContextProvider } from './components/contexts/ProductsContext';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserContextProvider>
        <ProductsContextProvider>
          <App />
        </ProductsContextProvider>
      </UserContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
