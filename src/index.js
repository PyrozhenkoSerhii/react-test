import React from 'react';
import ReactDOM from 'react-dom';

import {BrowserRouter} from 'react-router-dom';
import {Provider} from "react-alert";
import AlertTemplate from "react-alert-template-basic";

import App from './js/components/App.js';

const options = {
    offset: '50px',
    timeout: 3000,
    position: "top center"
};

ReactDOM.render((
    <Provider template={AlertTemplate}{...options}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>
), document.getElementById('root'));