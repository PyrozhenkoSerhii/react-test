import React from 'react';

export default class Home extends React.Component {
    constructor(props){
        super();
        let token = localStorage.getItem('token');
        //console.log(token);
    }
    render(){
        return (
            <h1>Home page</h1>
        );
    }
}