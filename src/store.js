import { createStore , applyMiddleware } from "redux";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import rootReducer from './js/reducers/root'
import {logger} from './js/middleware/logger';
import {apiMiddleware} from  './js/middleware/apiAsync';
import thunk from 'redux-thunk';

const persistConfig = {
    key: 'root',
    storage: storage,
    stateReconciler: autoMergeLevel2,
};

const pReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(pReducer, applyMiddleware(logger, apiMiddleware, thunk));

export const persistor = persistStore(store);
