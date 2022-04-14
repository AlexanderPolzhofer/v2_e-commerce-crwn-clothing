import { createContext, useEffect, useState } from "react";
import { addCollectionAndDocuments, getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";

import PRODUCTS from './../../shop-data';

export const ProductsContext = createContext({
    products: []
});

export const ProductsContextProvider = ({ children }) => {
    const [products, setProducts] = useState([]);

    // add collection and documents to firestore


    /* useEffect(() => {
            addCollectionAndDocuments('categories', PRODUCTS);
            console.log('done')
        }, []) 
        */


    useEffect(() => {
        const getCategoriesMap = async () => {
            const categoryMap = await getCategoriesAndDocuments();
            console.log(categoryMap)
        }
        getCategoriesMap();
    }, []);

    const value = { products }

    return <ProductsContext.Provider value={value}>
        {children}
    </ProductsContext.Provider>

};