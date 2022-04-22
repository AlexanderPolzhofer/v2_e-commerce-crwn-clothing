import { createContext, useEffect, useState } from "react";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";

export const CategoriesContext = createContext({
    categoriesMap: {},
});

export const CategoriesProvider = ({ children }) => {
    const [categoriesMap, setCategoriesMap] = useState({});

    // add collection and documents to firestore
    /* useEffect(() => {
            addCollectionAndDocuments('categories', PRODUCTS);
            console.log('done')
        }, []) 
        */


    useEffect(() => {
        const getCategoriesMap = async () => {
            const categoryMap = await getCategoriesAndDocuments();
            setCategoriesMap(categoryMap);
        }
        getCategoriesMap();
    }, []);

    const value = { categoriesMap }

    return <CategoriesContext.Provider value={value}>
        {children}
    </CategoriesContext.Provider>

};