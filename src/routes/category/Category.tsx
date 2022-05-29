import { useState, useEffect, Fragment } from 'react';
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import ProductCard from "../../components/product-card/ProductCard";
import Spinner from '../../components/spinner/spinner-component';
import {
    selectCategoriesMap,
    selectCategoriesIsLoading
} from '../../store/categories/category.selectors';

import { CategoryContainer, CategoryTitle } from './category.styles';

const Category = () => {

    type CategoryRouteParams = {
        category: string;
    }

    const { category } = useParams<keyof CategoryRouteParams>() as CategoryRouteParams;
    const categoriesMap = useSelector(selectCategoriesMap);
    const isLoading = useSelector(selectCategoriesIsLoading);

    const [products, setProducts] = useState(categoriesMap[category]);

    useEffect(() => {
        setProducts(categoriesMap[category])
    }, [category, categoriesMap]);

    return (
        <Fragment>
            <CategoryTitle>
                {category.toUpperCase()}
            </CategoryTitle>
            {
                isLoading ?
                    <Spinner /> :
                    (<CategoryContainer>
                        {products &&
                            products.map((product) =>
                                <ProductCard
                                    key={product.id}
                                    product={product}
                                />)}</CategoryContainer>)
            }
        </Fragment>
    )

};

export default Category;