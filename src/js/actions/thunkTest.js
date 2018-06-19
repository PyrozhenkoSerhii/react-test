import {LOG_ASYNC} from "../constants/reduxTypes";

function logger(text) {
    return {
        type: LOG_ASYNC,
        payload: text
    }
}

export default function asyncLogger(text) {
    return function (dispatch) {
        setTimeout(() => dispatch(logger(text)), 3000);
    }
}