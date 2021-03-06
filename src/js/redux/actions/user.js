import { SAVE_TOKEN, SAVE_USER, ADD_USER, LOGIN } from '../constants/reduxTypes';

export const saveUser = (user) => ({ type: SAVE_USER, payload: user });
export const saveToken = (user) => ({ type: SAVE_TOKEN, payload: user });
export const addUser = (user) => ({ type: ADD_USER, payload: user });

export const login = (user) => ({ type: LOGIN, payload: user }) 