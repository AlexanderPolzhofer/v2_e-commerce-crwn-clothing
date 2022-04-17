import React, { useContext } from 'react';
import { CategoriesContext } from '../../components/contexts/Categories.context';

import ProductCard from '../../components/product-card/ProductCard';

import './shop.styles.scss';

const ShopPage = () => {

    const { categoryMap } = useContext(CategoriesContext);

    return (
        <div className='products-container'>
            {/*   {categoryMap.map((product) => (
                <ProductCard
                    key={product.id}
                    product={product}
                />)
            )} */}
        </div>)
}
export default ShopPage;