import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Main from './Main';
import Navbar from './Navbar';

export default class Page extends React.Component {
    render(){
        return (
            <div>
                <Navbar/>
                <Main/>
            </div>
        );
    }
}

let app = document.getElementById('root');
ReactDOM.render(<Page/>, app);
