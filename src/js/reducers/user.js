import {ADD_USER, DELETE_USER} from "../constants/reduxTypes";

const initialState = {
    user: []
};

export function userReducer(state = initialState, action){
    switch (action.type){
        case ADD_USER:
            return {user: action.payload};
        case DELETE_USER:
            return {user: []};
        default:
            return state;
    }
}