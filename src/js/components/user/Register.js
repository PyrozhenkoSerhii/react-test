import React from 'react';
import {Redirect} from 'react-router-dom'
import {withAlert} from "react-alert";
import {connect} from "react-redux";
import axios from 'axios';

import {FormGroup} from 'react-bootstrap';
import {ControlLabel} from 'react-bootstrap';
import {FormControl} from 'react-bootstrap';
import {Button} from "react-bootstrap";

import {addUser} from "../../actions/user";
import {BASE_URL, customerUrl} from "../../apiConfig";

class Register extends React.Component {
    constructor(props) {
        super();
        this.state = {
            username: '',
            password: '',
            rPassword: '',
            redirect: false
        };
    }

    handleChange = e => {
        this.setState({
            [e.target.id]: e.target.value
        })
    };

    handleSubmit = e => {
        e.preventDefault();
        const user = {
            username: this.state.username,
            password: this.state.password
        };
        this.setState({
            username: '',
            password: '',
            rPassword: ''
        });
        addUser(user);

        axios.post(BASE_URL + customerUrl + 'register', user)
            .then((response) => {
                if (response.data.success) {
                    console.log(this.response);
                    setTimeout(() => {
                        this.setState({redirect: true})
                    }, 3000);
                } else {
                    this.props.alert.success('Something went wrong!');
                }
            });
    };

    validateForm = () => {
        return this.state.username.length > 2
            && this.state.password.length > 2
            && this.state.password === this.state.rPassword;
    };

    render() {
        if (this.state.redirect) {
            return <Redirect to='login'/>
        }
        return (
            <div>
                <h1>Register page</h1>
                <form onSubmit={this.handleSubmit}>
                    <FormGroup controlId="username" bsSize="large">
                        <ControlLabel>Username</ControlLabel>
                        <FormControl type="text" value={this.state.username} onChange={this.handleChange}/>
                    </FormGroup>
                    <FormGroup controlId="password" bsSize="large">
                        <ControlLabel>Password</ControlLabel>
                        <FormControl type="text" value={this.state.password} onChange={this.handleChange}/>
                    </FormGroup>
                    <FormGroup controlId="rPassword" bsSize="large">
                        <ControlLabel>Repeat password</ControlLabel>
                        <FormControl type="text" value={this.state.rPassword} onChange={this.handleChange}/>
                    </FormGroup>
                    <Button disabled={!this.validateForm()} type="submit" className="btn btn-success">Register</Button>
                </form>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addUser: user => dispatch(addUser(user))
    }
};

const wrappedRegister = withAlert(Register);

export default connect(null, mapDispatchToProps)(wrappedRegister)