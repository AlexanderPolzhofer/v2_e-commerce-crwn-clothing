import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';

import Home from './routes/home/Home';
import NavigationBar from './routes/navbar/NavigationBar';
import ShopPage from './routes/shop/ShopPage';
import Authentication from './routes/authentication/Authentication';
import Checkout from './routes/checkout/Checkout';

import { checkUserSession } from './store/user/user.action';

const App = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession())
  }, [dispatch]);

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
