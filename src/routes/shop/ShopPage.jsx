import React, { useContext } from 'react';

import { ProductsContext } from '../../components/contexts/ProductsContext';

const ShopPage = () => {

    const { products } = useContext(ProductsContext);
    console.log(products)
    return (
        <div>
            {products.map(({ id, name }) =>
                <div key={id}>
                    <h2>{name}</h2>
                </div>
            )}
        </div>)
}
export default ShopPage;