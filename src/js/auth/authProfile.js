import Auth0 from 'auth0-js';
import React, { Component } from 'react';

export default class AuthProfile extends Component {
    auth0 = new Auth0.WebAuth({
        domain: 'reactauth.eu.auth0.com',
        clientID: '4yZyO4SplKwgisOsexg9ZDxCuF7M3ByB',
        redirectUri: 'http://localhost:3000/callback',
        audience: 'https://reactauth.eu.auth0.com/userinfo',
        responseType: 'token id_token',
        scope: 'openid profile'
    });


}