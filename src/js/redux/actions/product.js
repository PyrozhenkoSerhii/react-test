import { ADD_PRODUCT, DELETE_PRODUCT, GET_PRODUCTS, API, GET_PRODUCT_BY_ID, FETCH_PRODUCTS_ASYNC, PRODUCTS_FETCHED } from '../constants/reduxTypes';
import { productUrl } from "../../apiConfig";

export const addProduct = (product) => ({ type: ADD_PRODUCT, payload: product });
export const deleteProduct = (product) => ({ type: DELETE_PRODUCT, payload: product });
export const getProductsAsync = () => ({
    type: API,
    payload: { url: productUrl + 'getAll', ...GET_PRODUCTS }
});
export const getProductById = (product) => ({ type: GET_PRODUCT_BY_ID, payload: product });

//saga
export const fetchProductsAsync = (data) => ({ type: FETCH_PRODUCTS_ASYNC , payload: data})
export const productFetched = products => ({type: PRODUCTS_FETCHED, payload: products });