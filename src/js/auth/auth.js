/* eslint no-restricted-globals: 0 */

import Auth0 from 'auth0-js';

export default class Auth {
    auth0 = new Auth0.WebAuth({
        domain: 'reactauth.eu.auth0.com',
        clientID: '4yZyO4SplKwgisOsexg9ZDxCuF7M3ByB',
        redirectUri: 'http://localhost:3000/callback',
        audience: 'https://reactauth.eu.auth0.com/userinfo',
        responseType: 'token id_token',
        scope: 'openid profile'
    });

    login = () => this.auth0.authorize();

    handleAuthentication = () => {
        this.auth0.parseHash((err, res) => {
            err ? console.log('err: ', err) : console.log('success: ', res);
            if (res && res.accessToken && res.idToken) {
                const expiresAt = JSON.stringify((res.expiresIn * 1000) + new Date().getTime())

                localStorage.setItem('access_token', res.accessToken)
                localStorage.setItem('token_id', res.idToken)
                localStorage.setItem('expires_at', expiresAt)

                location.pathname = '/';
            }
            if (err) {
                console.error('> Error while handling auth0 authentification: ', err)
                location.pathname = '/login';
            }
        })
    }

    logout() {
        localStorage.removeItem('access_token')
        localStorage.removeItem('token_id')
        localStorage.removeItem('expires_at')

        location.pathname = '/login';
    }

    isAuthenticated() {
        const expiresAt = JSON.parse(localStorage.getItem('expires_at'))
        console.log('checking...', expiresAt ? new Date().getTime() < expiresAt : false);
        return expiresAt ? new Date().getTime() < expiresAt : false
    }

    //profile
    profile = {};

    getProfile(callback) {
        const token = localStorage.getItem('access_token');
        if (!token) {
            throw new Error('No token found!');
        }
        this.auth0.client.userInfo(token, (err, res) => {
            if (res) {
                this.profile = res;
            }
            callback(err, res);
        })
    }
}
