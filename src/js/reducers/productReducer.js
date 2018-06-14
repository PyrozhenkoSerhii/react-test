import {ADD_PRODUCT, DELETE_PRODUCT} from "../constants/actionTypes";

const initialState = {
    products: []
};

const rootReducer = (state = initialState, action) => {
    switch (action.type){
        case ADD_PRODUCT:
            console.log(action.payload);
            return {products: [...state.products, action.payload]};
        case DELETE_PRODUCT:
            let tempProduct = [...state.products];
            tempProduct = tempProduct.filter(el => el.id !== action.payload.id);
            return {products: tempProduct};
        default:
            return state;
    }
};

export default rootReducer;