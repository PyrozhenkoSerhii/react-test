import {SAVE_TOKEN, SAVE_USER} from "../constants/reduxTypes";

const initialState = {
    user: [],
    token: ''
};

export function userReducer(state = initialState, action){
    switch (action.type){
        case SAVE_USER:
            return {...state, user: action.payload};
        case SAVE_TOKEN:
            return {...state, token: action.payload};
        default:
            return state;
    }
}