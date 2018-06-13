import React from 'react';

import { FormGroup } from 'react-bootstrap';
import { ControlLabel } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

import {Link} from 'react-router-dom'

export default class Login extends React.Component {
    constructor(props){
        super();
        this.state = {
            username: "",
            pass: ""
        }
    }

    validateForm(){
        return this.state.username.length > 0 && this.state.pass.length > 0;
    }

    changeHandler = event => {
        this.setState = {
            [event.target.id]: event.target.value
        }
    };
    submitHandler = event => {
        event.preventDefault();
        console.log('request!');
    };

    render() {
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <h1>Login</h1>
                    <FormGroup controlId="email" bsSize="large">
                        <ControlLabel>Email</ControlLabel>
                        <FormControl type="email" value={this.state.email} onChange={this.changeHandler}/>
                    </FormGroup>
                    <FormGroup controlId="password" bsSize="large">
                        <ControlLabel>Password</ControlLabel>
                        <FormControl type="password" value={this.state.email} onChange={this.changeHandler}/>
                    </FormGroup>
                    <Button disabled={!this.validateForm()} type="submit">Login</Button>
                </form>
                <Link to="/register">Don't u have an account? Register</Link>
            </div>
        );
    }
}