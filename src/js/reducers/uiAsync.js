import {GET_PRODUCTS} from "../constants/reduxTypes";

const initialState = {
    productPending: false
};

export default function uiAsync(state = initialState, action) {
    switch (action.type) {
        case GET_PRODUCTS.SUCCESS:
        case GET_PRODUCTS.FAILURE:
            return {...state, productPending: false};
        case GET_PRODUCTS.PENDING:
            return {...state, productPending: true};
        default:
            return state;
    }
}