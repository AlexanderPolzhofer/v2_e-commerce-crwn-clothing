import React, { Fragment, useContext } from 'react';

import { CategoriesContext } from '../../components/contexts/Categories.context';

import CategoryPreview from '../../components/category-preview/CategoryPreview';

const ShopPage = () => {

    const { categoriesMap } = useContext(CategoriesContext);

    return (
        <Fragment>
            {
                Object.keys(categoriesMap).map((title) => {
                    const products = categoriesMap[title];
                    return <CategoryPreview
                        key={title}
                        products={products}
                        title={title} />
                }
                )
            }
            )
        </Fragment>)
}

export default ShopPage;