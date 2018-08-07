import { createStore , applyMiddleware, compose } from "redux";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import rootReducer from './js/reducers/root'
import {logger} from './js/middleware/logger';
// import {apiMiddleware} from  './js/middleware/apiAsync';
import thunk from 'redux-thunk';

const persistConfig = {
    key: 'root',
    storage: storage,
    stateReconciler: autoMergeLevel2,
};

const pReducer = persistReducer(persistConfig, rootReducer);

const initializeStore = () => {
    const isServer = typeof window === 'undefined';
    let composeEnhancers;

    if (!isServer) {
        composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    } else {
        composeEnhancers = compose
    }

    // const store = createStore(pReducer, {}, composeEnhancers(applyMiddleware(logger, apiMiddleware, thunk)));
    const store = createStore(pReducer, {}, composeEnhancers(applyMiddleware(logger, thunk)));

    return {
        store: store,
        persistor: persistStore(store)
    }
}

const reduxStaff = initializeStore();

export const store = reduxStaff.store;
export const persistor = reduxStaff.persistor;