import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import {
    selectCategoriesIsLoading,
    selectCategoriesMap
} from '../../store/categories/category.selectors';

import CategoryPreview from '../../components/category-preview/CategoryPreview';
import Spinner from '../../components/spinner/spinner-component';

const CategoriesPreview = () => {

    const categoriesMap = useSelector(selectCategoriesMap)
    const isLoading = useSelector(selectCategoriesIsLoading)

    return (
        <Fragment>
            {isLoading ? <Spinner /> :
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