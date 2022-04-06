import React from 'react';

import SHOP_DATA from '../../shop-data';

const ShopPage = () => {
    return (
        <div>
            {SHOP_DATA.map(({ id, name }) => (
                <div key={id}>
                    <h2>{name}</h2>
                </div>
            ))}
        </div>)
}
export default ShopPage;