import {
    Routes,
    Route
} from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import CategoriesPreview from '../categories-preview/CategoriesPreview';
import Category from '../category/Category';
import { fetchCategoriesStart } from '../../store/categories/category.action';

const ShopPage = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchCategoriesStart());
    }, [dispatch]);

    return (
        <Routes>
            <Route index element={<CategoriesPreview />} />
            <Route path=":category" element={<Category />} />
        </Routes>
    );

};

export default ShopPage;