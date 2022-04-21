import { useParams } from "react-router-dom";

import { useState, useEffect, useContext } from 'react';

import { CategoriesContext } from '../../components/contexts/Categories.context';
import ProductCard from "../../components/product-card/ProductCard";

import './Category.styles.scss';

const Category = () => {

    const { category } = useParams();
    const { categoriesMap } = useContext(CategoriesContext);

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