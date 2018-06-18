import {ADD_PRODUCT, DELETE_PRODUCT} from "../constants/reduxTypes";
// import {historyReducerWrapper} from "./testHistoryReducer";
// import {includeAction} from 'redux-undo'

const initialState = {
    products: []
};

export default function productReducer(state = initialState, action){
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

//export default historyReducerWrapper(reducer, {filter: includeAction(['ADD_PRODUCT', 'DELETE_PRODUCT']) });