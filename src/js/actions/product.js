import {ADD_PRODUCT, DELETE_PRODUCT} from '../constants/reduxTypes';

export const addProduct = (product) => ({ type: ADD_PRODUCT, payload: product });
export const deleteProduct = (product) => ({type: DELETE_PRODUCT, payload: product});