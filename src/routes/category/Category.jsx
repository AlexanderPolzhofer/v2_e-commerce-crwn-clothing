import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import ProductCard from "../../components/product-card/ProductCard";
import { selectCategoriesMap } from '../../store/categories/category.selectors';
import './Category.styles.scss';

const Category = () => {

    const { category } = useParams();
    const categoriesMap = useSelector(selectCategoriesMap)

    const [products, setProducts] = useState([]);

    useEffect(() => {
        setProducts(categoriesMap[category]);
    }, [category, categoriesMap])

    return (
        <>
            <div className="category-title">
                {category.toUpperCase()}
            </div>
            <div className="category-container">
                {products &&
                    products.map((product) =>
                        <ProductCard
                            key={product.id}
                            product={product}
                        />)}
            </div>
        </>

    )

}

export default Category;