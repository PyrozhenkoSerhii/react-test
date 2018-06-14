import React from 'react';
import ReactDOM from 'react-dom';

import {BrowserRouter} from 'react-router-dom';
import {Provider as AlertProvider} from "react-alert";
import {Provider as ReduxProvider} from "react-redux";
import AlertTemplate from "react-alert-template-basic";

import store from './store/indexStore';
import App from './js/components/App.js';

const options = {
    offset: '50px',
    timeout: 3000,
    position: "top center"
};

ReactDOM.render((
    <ReduxProvider store={store}>
        <AlertProvider template={AlertTemplate}{...options}>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </AlertProvider>
    </ReduxProvider>
), document.getElementById('root'));