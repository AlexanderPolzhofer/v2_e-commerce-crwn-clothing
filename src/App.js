import Home from './routes/home/Home.jsx';

import { Routes, Route } from 'react-router-dom';

import NavigationBar from './routes/navbar/NavigationBar.jsx';

import ShopPage from './routes/shop/ShopPage.jsx';

const App = () => {

  return (
    <Routes>
      <Route path='/' element={<NavigationBar />}>
        <Route index element={<Home />} />
        <Route path='shop' element={<ShopPage />} />
      </Route>
    </Routes>);
}

export default App;
