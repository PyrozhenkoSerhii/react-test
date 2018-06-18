import {combineReducers} from 'redux';
import product from './product';
import user from './user'
import uiAsync from './uiAsync';

export default combineReducers({
    product,
    user,
    uiAsync
})