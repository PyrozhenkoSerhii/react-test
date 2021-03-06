import React from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { withAlert } from "react-alert";
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import { saveUser, saveToken, login } from "../../redux/actions/user";

import { FormGroup } from 'react-bootstrap';
import { ControlLabel } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

import { BASE_URL, customerUrl } from "../../apiConfig";

const mapDispatchToProps = (dispatch) => {
    return {
        saveUser: user => dispatch(saveUser(user)),
        saveToken: token => dispatch(saveToken(token)),
        login: user => dispatch(login(user))
    };
};

class Login extends React.Component {
    config = {
        headers: {
            'Content-Type': 'application/json',
        }
    };

    constructor(props) {
        super();
        this.state = {
            username: '',
            password: '',
            redirect: false
        };
    }

    validateForm() {
        return this.state.username.length > 2 && this.state.password.length > 2;
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    };

    handleSubmit = (e) => {
        e.preventDefault();
        let customer = { username: this.state.username, password: this.state.password }
        this.props.login({ customer: customer })
        // axios.post(BASE_URL + customerUrl + 'authenticate', { customer: customer }, this.config)
        //     .then((response) => {
        //         if (response.data.success) {
        //             localStorage.setItem('token', response.data.token);
        //             console.log(response);
        //             this.setState({
        //                 redirect: true
        //             });
        //             // save user by 2 ways
        //             this.props.userUpdater(response.data.customer);
        //             this.props.saveUser(response.data.customer);
        //             this.props.saveToken(response.data.token);
        //         } else {
        //             this.props.alert.error("Wrong username or password!");
        //         }
        //     })
    };

    render() {
        if (this.state.redirect) {
            return <Redirect to='/' />
        }
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h1>Login</h1>
                    <FormGroup controlId="username" bsSize="large">
                        <ControlLabel>Username</ControlLabel>
                        <FormControl type="text" value={this.state.username} onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup controlId="password" bsSize="large">
                        <ControlLabel>Password</ControlLabel>
                        <FormControl type="password" value={this.state.password} onChange={this.handleChange} />
                    </FormGroup>
                    <Button disabled={!this.validateForm()} className="btn btn-success" type="submit">Login</Button>
                </form>
                <Link to="/register">Don't u have an account? Register</Link>
            </div>
        );
    }
}

Login.protoTypes = {
    userUpdater: PropTypes.any,

};

const wrappedLogin = withAlert(Login);

export default connect(null, mapDispatchToProps)(wrappedLogin)