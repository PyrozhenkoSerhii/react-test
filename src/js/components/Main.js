import React from 'react';

import Route from 'react-router-dom'
import Switch from 'react-router-dom'

import Login from './Login';
import Register from './Register';
import Home from './Home';

export class Router extends React.Component {
    render(){
        return (
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/register' component={Register}/>
                <Route path='/login' component={Login}/>
            </Switch>
        );
    }
}