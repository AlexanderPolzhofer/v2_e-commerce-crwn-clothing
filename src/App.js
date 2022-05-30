import { useEffect, lazy, Suspense } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import Spinner from './components/spinner/spinner-component';

import { checkUserSession } from './store/user/user.action';

import { GlobalStyle } from './global.styles';

const NavigationBar = lazy(() => import('./routes/navbar/NavigationBar'));
const Home = lazy(() => import('./routes/home/Home'));
const ShopPage = lazy(() => import('./routes/shop/ShopPage'));
const Authentication = lazy(() => import('./routes/authentication/Authentication'));
const Checkout = lazy(() => import('./routes/checkout/Checkout'));

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession())
  }, []);

  return (
    <Suspense fallback={<Spinner />}>
      <GlobalStyle />
      <Routes>
        <Route path='/' element={<NavigationBar />}>
          <Route index element={<Home />} />
          <Route path='shop/*' element={<ShopPage />} />
          <Route path='auth' element={<Authentication />} />
          <Route path='checkout' element={<Checkout />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
