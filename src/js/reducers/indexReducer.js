import {ADD_PRODUCT} from "../constants/actionTypes";

const initialState = {
    products: []
};

const rootReducer = (state = initialState, action) => {
    switch (action.type){
        case ADD_PRODUCT:
            // state.articles.push(action.payload);
            // return state;
            return {...state, products: [...state.products, action.payload]};
        default:
            return state;
    }
};

export default rootReducer;