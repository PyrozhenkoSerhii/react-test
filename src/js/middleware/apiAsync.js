import axios from 'axios';
import {API} from '../constants/reduxTypes';
import {BASE_URL} from "../apiConfig";

export const apiMiddleware = ({dispatch}) => next => action => {
    if (action.type !== API) {
        return next(action)
    }

    const {payload} = action;

    dispatch({type: payload.PENDING});

    axios.get(BASE_URL + payload.url)
        .then(response => {
            console.log(payload.SUCCESS);
            dispatch({type: payload.SUCCESS, payload: response.data.products})
        })
        .catch(err => {
            console.log(err);
            dispatch({type: payload.FAILURE})
        })
};