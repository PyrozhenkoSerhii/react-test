import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import {Link, Route, Switch} from 'react-router-dom'

import Login from './Login';
import Register from './Register';
import Home from './Home';

export default class App extends React.Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-light">
                    <ul className="nav navbar-nav">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/login">Login</Link></li>
                        <li><Link to="/register">Register</Link></li>
                    </ul>
                </nav>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/register" component={Register}/>
                </Switch>
            </div>
        );
    }
}