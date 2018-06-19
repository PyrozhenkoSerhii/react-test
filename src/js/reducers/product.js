import {ADD_PRODUCT, DELETE_PRODUCT, GET_PRODUCT_BY_ID, GET_PRODUCTS} from "../constants/reduxTypes";

const initialState = {
    products: []
};

export default function productReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_PRODUCT:
            return {...state, products: [...state.products, action.payload]};
        case DELETE_PRODUCT:
            let tempProduct = [...state.products];
            tempProduct = tempProduct.filter(el => el._id !== action.payload._id);
            return {...state, products: tempProduct};
        case GET_PRODUCT_BY_ID:
            // todo get by id;
            return state;
        case GET_PRODUCTS.SUCCESS:
            return {products: [...action.payload]};
        case GET_PRODUCTS.PENDING:
        case GET_PRODUCTS.FAILURE:
            return state;
        default:
            return state;
    }
}