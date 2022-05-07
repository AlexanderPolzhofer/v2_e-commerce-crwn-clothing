import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { selectCategoriesMap } from '../../store/categories/category.selectors';

import CategoryPreview from '../../components/category-preview/CategoryPreview';

const CategoriesPreview = () => {

    const categoriesMap = useSelector(selectCategoriesMap)

    return (
        <Fragment>
            {
                Object.keys(categoriesMap).map((title) => {
                    const products = categoriesMap[title]
                    return (<CategoryPreview
                        key={title}
                        products={products}
                        title={title} />)
                }
                )
            }
        </Fragment>)
}

export default CategoriesPreview;