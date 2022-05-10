import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { fetchCategoriesAsync } from '../../store/categories/category.action';

import CategoriesPreview from '../../routes/categories-preview/CategoriesPreview';
import Category from '../../routes/category/Category';

const ShopPage = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchCategoriesAsync());
    }, []);

    return (
        <Routes>
            <Route index element={<CategoriesPreview />} />
            <Route path=":category" element={<Category />} />
        </Routes>
    );

};

export default ShopPage;