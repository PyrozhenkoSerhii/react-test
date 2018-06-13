import React from 'react';

export default class Home extends React.Component {
    constructor(props) {
        super();
        // let token = localStorage.getItem('token');
    }

    render() {
        return (
            <h1>{this.props.userData.username}</h1>
        );
    }
}