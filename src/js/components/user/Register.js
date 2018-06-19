import React from 'react';
import {Redirect} from 'react-router-dom'
import {withAlert} from "react-alert";
import {connect} from "react-redux";
import {addUser} from "../../actions/user";

class Register extends React.Component {
    constructor(props) {
        super();
        this.state = {
            username: '',
            password: '',
            redirect: false
        };
    }

    handleChange = e => {
        this.setState({
            [e.target.id]: [e.target.value]
        })
    };
    handleSubmit = e => {
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
    };

    validateForm() {
        return this.state.username.length > 2
            && this.state.password.length > 2
            && this.state.password === this.state.rPassword;
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to='/'/>
        }
        return (
            <div>
                <h1>Register page</h1>
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.handleChange} type="text" id="username" placeholder="username"
                           className="form-control" value={this.state.username}/>
                    <input onChange={this.handleChange} type="password" id="password" placeholder="password"
                           className="form-control" value={this.state.password}/>
                    <input onChange={this.handleChange} type="password" id="rPassword" placeholder="repeat password"
                           className="form-control" value={this.state.rPassword}/>
                    <button disabled={!this.validateForm()} class="btn btn-success">Register</button>
                </form>
            </div>
        );
    }
}

const mapDispatchToProps = ({dispatch}) => {
    return {
        addUser: user => dispatch(addUser(user))
    }
}

const wrappedRegister = withAlert(Register);

export default connect(null, mapDispatchToProps)(wrappedRegister)