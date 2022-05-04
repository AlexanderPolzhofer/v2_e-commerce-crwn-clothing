import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import CategoriesPreview from '../../routes/categories-preview/CategoriesPreview';
import Category from '../../routes/category/Category';

import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils';
import { setCategoriesMap } from './../../store/categories/category.action';

const ShopPage = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        const getCategoriesMap = async () => {
            const categoryMap = await getCategoriesAndDocuments('categories');
            dispatch(setCategoriesMap(categoryMap));
        }
        getCategoriesMap();
    }, []);

    return (
        <Routes>
            <Route index element={<CategoriesPreview />} />
            <Route path=":category" element={<Category />} />
        </Routes>
    );

};

export default ShopPage;