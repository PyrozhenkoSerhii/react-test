import React from 'react';
import ReactDOM from 'react-dom';

import {BrowserRouter} from 'react-router-dom';
import {Provider as AlertProvider} from "react-alert";
import {Provider as ReduxProvider} from "react-redux";
import {PersistGate} from 'redux-persist/lib/integration/react';
import AlertTemplate from "react-alert-template-basic";

import {store, persistor} from "./store";
import App from './js/components/App.js';
import LoadingView from './js/components/LoadingView';

import {getProductsAsync} from "./js/actions/product";

const options = {
    offset: '50px',
    timeout: 3000,
    position: "top center"
};

store.dispatch(getProductsAsync());

ReactDOM.render((
    <ReduxProvider store={store}>
        <PersistGate loading={<LoadingView />} persistor={persistor}>
            <AlertProvider template={AlertTemplate}{...options}>
                <BrowserRouter>
                    <App/>
                </BrowserRouter>
            </AlertProvider>
        </PersistGate>
    </ReduxProvider>
), document.getElementById('root'));