import {
    ADD_PRODUCT, DELETE_PRODUCT, GET_PRODUCT_BY_ID, GET_PRODUCTS, PRODUCTS_FETCHED,
} from '../constants/reduxTypes'

const initialState = {
    products: [],
}

export default function productReducer(state = initialState, action) {
    switch (action.type) {
    case ADD_PRODUCT:
        return { ...state, products: [...state.products, action.payload] }
    case DELETE_PRODUCT:
        return {
            ...state,
            products: [...state.products].filter(el => el._id !== action.payload._id),
        }
    case GET_PRODUCT_BY_ID:
        // todo get by id;
        return state
    case PRODUCTS_FETCHED:
        return { products: [...action.payload] }
    case GET_PRODUCTS.SUCCESS:
        return { products: [...action.payload] }
    case GET_PRODUCTS.PENDING:
    case GET_PRODUCTS.FAILURE:
        return state
    default:
        return state
    }
}
