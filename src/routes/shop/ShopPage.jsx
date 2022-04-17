import React, { Fragment, useContext } from 'react';
import { CategoriesContext } from '../../components/contexts/Categories.context';

import ProductCard from '../../components/product-card/ProductCard';

import './shop.styles.scss';

const ShopPage = () => {

    const { categoriesMap } = useContext(CategoriesContext);

    return (
        <Fragment>
            {
                Object.keys(categoriesMap).map((title) => (
                    <Fragment key={title}>
                        <h2>{title}</h2>
                        <div className='products-container'>
                            {categoriesMap[title].map((product) => (
                                <ProductCard
                                    key={product.id}
                                    product={product}
                                />)
                            )}
                        </div>
                    </Fragment>
                ))
            }
            )
        </Fragment>)

}
export default ShopPage;