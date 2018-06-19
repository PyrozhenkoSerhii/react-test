export const ADD_PRODUCT = "ADD_PRODUCT";
export const DELETE_PRODUCT = "DELETE_PRODUCT";
export const GET_PRODUCT_BY_ID = "GET_PRODUCT_BY_ID";

export const SAVE_USER = "SAVE_USER";
export const SAVE_TOKEN = "SAVE_TOKEN";
export const ADD_USER = "ADD_USER";

export const REDO = "REDO";
export const UNDO = "UNDO";

export const API = "API";
const asyncActionTypes = (requestType) => ({
    PENDING: `${requestType}_PENDING`,
    SUCCESS: `${requestType}_SUCCESS`,
    FAILURE: `${requestType}_FAILURE`
});
export const GET_PRODUCTS = asyncActionTypes('GET_PRODUCTS');

export const LOG_ASYNC = "LOG_ASYNC";