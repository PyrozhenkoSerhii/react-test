import { createStore } from "redux";
import rootReducer from '../js/reducers/productReducer'

const store = createStore(rootReducer);
export default store;