import { createStore, applyMiddleware, compose } from "redux"
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'

import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'

import rootReducer from './reducers/root'
import { logger } from './middleware/logger'
import { rootSaga } from './saga/root'


const persistConfig = {
    key: 'root',
    storage: storage,
    stateReconciler: autoMergeLevel2,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const isServer = typeof window === 'undefined'
let composeEnhancers

if (!isServer) {
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
} else {
    composeEnhancers = compose
}

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(persistedReducer, {}, composeEnhancers(applyMiddleware(logger, thunk, sagaMiddleware)))
sagaMiddleware.run(rootSaga)
export const persistor = persistStore(store)
