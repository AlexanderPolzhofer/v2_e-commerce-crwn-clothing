import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';

import Home from './routes/home/Home.jsx';
import NavigationBar from './routes/navbar/NavigationBar.jsx';
import ShopPage from './routes/shop/ShopPage.jsx';
import Authentication from './routes/authentication/Authentication.jsx';
import Checkout from './routes/checkout/Checkout.jsx';

import { checkUserSession } from './store/user/user.action.js';

const App = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession())
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
