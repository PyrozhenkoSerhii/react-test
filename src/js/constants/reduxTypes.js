export const ADD_PRODUCT = "ADD_PRODUCT";
export const DELETE_PRODUCT = "DELETE_PRODUCT";

export const SAVE_USER = "SAVE_USER";
export const SAVE_TOKEN = "SAVE_TOKEN";
export const GET_USER = "GET_USER";

export const REDO = "REDO";
export const UNDO = "UNDO";


//async test
export const API = "API";
const asyncActionTypes = (type) => ({
    PENDING: `${type}_PENDING`,
    SUCCESS: `${type}_SUCCESS`,
    FAILURE: `${type}_FAILURE`
});
export const GET_PRODUCTS = asyncActionTypes('GET_PRODUCTS');