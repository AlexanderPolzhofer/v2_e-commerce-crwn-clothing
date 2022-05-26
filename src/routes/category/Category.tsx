import { useState, useEffect, Fragment } from 'react';
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import ProductCard from "../../components/product-card/ProductCard";
import Spinner from '../../components/spinner/spinner-component';
import {
    selectCategoriesMap,
    selectCategoriesIsLoading
} from '../../store/categories/category.selectors';
import './Category.styles.scss';

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
            <div className="category-title">
                {category.toUpperCase()}
            </div>
            {
                isLoading ?
                    <Spinner /> :
                    (<div className="category-container">
                        {products &&
                            products.map((product) =>
                                <ProductCard
                                    key={product.id}
                                    product={product}
                                />)}</div>)
            }

        </Fragment>

    )

};

export default Category;