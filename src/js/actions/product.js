import {ADD_PRODUCT, DELETE_PRODUCT, GET_PRODUCTS, API} from '../constants/reduxTypes';

export const addProduct = (product) => ({type: ADD_PRODUCT, payload: product});
export const deleteProduct = (product) => ({type: DELETE_PRODUCT, payload: product});
export const getProductsAsync = () => ({
    type: API,
    payload: {url: 'products/getAll', ...GET_PRODUCTS}
});