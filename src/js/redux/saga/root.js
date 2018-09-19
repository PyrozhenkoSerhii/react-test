// import { delay } from 'redux-saga'
import { all, takeEvery, call, put, take } from 'redux-saga/effects'
import { PRODUCTS_FETCHED, FETCH_PRODUCTS_ASYNC, LOGIN, SAVE_USER, SAVE_TOKEN, REQUEST_ERROR } from '../constants/reduxTypes'
import { BASE_URL } from '../../apiConfig'
import axios from "axios"


const Api = {
    getRequest: (url) => axios.get(BASE_URL + url),
    postRequest: (url, data) => axios.post(BASE_URL + url, data)
}


function* fetchProductsWatcher() {
    yield takeEvery(FETCH_PRODUCTS_ASYNC, fetchProducts)
}

function* fetchProducts() {
    try {
        const response = yield call(Api.getRequest, 'products/getAll')
        yield put({ type: PRODUCTS_FETCHED, payload: response.data.products })
    }
    catch (error) {
        console.error('request error: ', error)
        yield put({ type: REQUEST_ERROR, payload: error })
    }
}


function* loginWatcher() {
    const { payload } = yield take(LOGIN)
    yield call(login, payload)
}

function* login(payload) {
    try {
        const response = yield call(Api.postRequest, 'customers/authenticate', payload.user)
        yield put({ type: SAVE_USER, payload: response.data.customer })
        yield put({ type: SAVE_TOKEN, payload: response.data.token })
    }
    catch (error) {
        console.error('request error: ', error)
        yield put({ type: REQUEST_ERROR, payload: error })
    }
}


export function* rootSaga() {
    yield all([
        fetchProductsWatcher(),
        loginWatcher()
    ])
}