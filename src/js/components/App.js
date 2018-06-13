import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import {Link, Route, Switch} from 'react-router-dom'

import Login from './Login';
import Register from './Register';
import Home from './Home';



export default class App extends React.Component {
    constructor(props) {
        super();
        this.state = {
            user: []
        }

    }

    userUpdater(currentUser) {
        this.setState({
            user: currentUser
        });
    };

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
                            <li className="nav-item active">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/login">Login</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/register">Register</Link>
                            </li>
                        </ul>
                    </div>
                </nav>

                <div className="container">
                    <Switch>
                        <Route
                            exact path='/'
                            render={(props) => <Home {...props} userData={this.state.user} />}
                        />
                        <Route
                            path='/login'
                            render={(props) => <Login {...props} userUpdater={this.userUpdater.bind(this)} />}
                        />
                        <Route path="/register" component={Register}/>
                    </Switch>
                </div>
            </div>
        );
    }
}