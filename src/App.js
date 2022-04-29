import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { setCurrentUser } from './store/user/user.action.js';

import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth
} from './utils/firebase/firebase.utils.js';

import Home from './routes/home/Home.jsx';
import { Routes, Route } from 'react-router-dom';
import NavigationBar from './routes/navbar/NavigationBar.jsx';
import ShopPage from './routes/shop/ShopPage.jsx';
import Authentication from './routes/authentication/Authentication.jsx';
import Checkout from './routes/checkout/Checkout.jsx';

const App = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      dispatch(setCurrentUser(user));
    });

    return unsubscribe;
  }, []);

  return (
    <Routes>
      <Route path='/' element={<NavigationBar />}>
        <Route index element={<Home />} />
        <Route path='shop/*' element={<ShopPage />} />
        <Route path='auth' element={<Authentication />} />
        <Route path='checkout' element={<Checkout />} />
      </Route>
    </Routes>
  );
}

export default App;
