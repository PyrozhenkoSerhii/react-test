import React from 'react';

import { FormGroup } from 'react-bootstrap';
import { ControlLabel } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

export default class Login extends React.Component {
    constructor(props){
        super();
        this.state = {
            username: "",
            password: ""
        }
    }

    changeHandler = event => {
        this.setState = {
            [event.target.id]: event.target.value
        }
    };
    submitHandler = event => {
        event.preventDefault();
    };

    render() {
        return (
            <div>
                <form>
                    <h1>Login</h1>
                    <FormGroup controlId="email">
                        <ControlLabel>Email</ControlLabel>
                        <FormControl type="email" value={this.state.email} onChange={this.changeHandler}/>
                    </FormGroup>
                    <FormGroup controlId="password">
                        <ControlLabel>Password</ControlLabel>
                        <FormControl type="text" value={this.state.password} onChange={this.changeHandler}/>
                    </FormGroup>
                    <Button disabled={!this.validForm} type="submit">Login</Button>
                </form>
                <a>Don't u have an account? Register</a>
            </div>
        );
    }
}