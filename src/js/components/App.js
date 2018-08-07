import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Link, Route, Switch, Redirect } from 'react-router-dom'

import Login from './user/Login';
import Register from './user/Register';
import Home from './Home';
import Product from './Product';
import Callback from './callback/Callback';

import MobxTest from './mobxTest';

import {counterStore} from '../mobx/counter';

import Auth from '../auth/auth';

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
        // localStorage.getItem('access_token') !== null ? <Component {...props} /> : <Redirect to='/login' />
        localStorage.getItem('token') !== null ? <Component {...props} /> : <Redirect to='/login' />
    )} />
);


export default class App extends React.Component {
    constructor(props) {
        super();

        this.state = {
            user: [],
            authenticated: localStorage.getItem('token') !== null,
            isAuth0: this.auth.isAuthenticated()
        };
        this.auth0Login = this.auth.login
    }

    auth = new Auth(this.props);

    handleAuthentication = ({ location }) => {
        if (/access_token|id_token|error/.test(location.hash)) {
            this.auth.handleAuthentication();
        }
    }

    userUpdater(currentUser) {
        this.setState({
            user: currentUser,
            authenticated: localStorage.getItem('token') !== null
        });
    };

    logout = () => {
        localStorage.clear();
        this.setState({
            user: [],
            authenticated: false,
            isAuth0: false
        });
    };

    authLogin = () => {
        console.info('auth0');
        this.auth0Login();
    }

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                {!this.state.authenticated && <Link className="nav-link" to="/register">Register</Link>}
                            </li>
                            <li className="nav-item">
                                {!this.state.authenticated && <Link className="nav-link" to="/login">Login</Link>}
                            </li>
                            <li className="nav-item">
                                {this.state.authenticated && <Link className="nav-link" to="/product">Product</Link>}
                            </li>
                            <li className="nav-item">
                                {this.state.authenticated && <Link className="nav-link" to="/login" onClick={this.logout}>Logout</Link>}
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" onClick={this.authLogin}>Auth0 test</a>
                            </li>
                            <li className="nav-item">
                                {this.state.authenticated && <Link className="nav-link" to="/mobxTest">MobxTest</Link>}
                            </li>

                        </ul>
                    </div>
                </nav>

                <div className="container">
                    <Switch>
                        <Route
                            exact path='/'
                            render={(props) => <Home {...props} userData={this.state.user} mobxStore={counterStore} />}
                        />
                        <Route
                            path='/login'
                            render={(props) => <Login {...props} userUpdater={this.userUpdater.bind(this)} />}
                        />
                        <Route path="/register" component={Register} />
                        <Route
                            path="/callback"
                            render={
                                (props) => {
                                    this.handleAuthentication(props);
                                    return <Callback {...props} />
                                }
                            }
                        />
                        <Route 
                            path="/mobxTest"
                            render={(props) => <MobxTest {...props} store={counterStore} />} 
                        />
                        <PrivateRoute path="/product" component={Product} />
                    </Switch>
                </div>
            </div>
        );
    }
}