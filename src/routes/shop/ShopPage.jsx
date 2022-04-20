import { Routes, Route } from 'react-router-dom';

import CategoriesPreview from '../../routes/categories-preview/CategoriesPreview';
import Category from '../../routes/category/Category';

const ShopPage = () => {

    return (
        <Routes>
            <Route index element={<CategoriesPreview />} />
            <Route path=":category" element={<Category />} />
        </Routes>
    );

};

export default ShopPage;