import {ADD_PRODUCT, DELETE_PRODUCT} from "../constants/reduxTypes";

const initialState = {
    products: []
};

export function productReducer(state = initialState, action){
    switch (action.type){
        case ADD_PRODUCT:
            return {...state, products: [...state.products, action.payload]};
        case DELETE_PRODUCT:
            let tempProduct = [...state.products];
            tempProduct = tempProduct.filter(el => el.id !== action.payload.id);
            return {...state, products: tempProduct};
        default:
            return state;
    }
}
