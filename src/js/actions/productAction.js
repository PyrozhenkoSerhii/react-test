import {ADD_PRODUCT, DELETE_PRODUCT} from '../constants/actionTypes';

export const addProduct = (product) => ({ type: ADD_PRODUCT, payload: product });
export const deleteProduct = (product) => ({type: DELETE_PRODUCT, payload: product});