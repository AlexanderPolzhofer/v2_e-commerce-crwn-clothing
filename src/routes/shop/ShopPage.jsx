import { Routes, Route } from 'react-router-dom';

import CategoriesPreview from '../../routes/categories-preview/CategoriesPreview';

const ShopPage = () => {

    return (
        <Routes>
            <Route index element={<CategoriesPreview />} />
        </Routes>
    )
}

export default ShopPage;