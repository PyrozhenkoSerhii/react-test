import auth0 from 'auth0-js';
// import history from './history';

export default class Auth {
    auth0 = new auth0.WebAuth({
        domain: 'reactauth.eu.auth0.com',
        clientID: '4yZyO4SplKwgisOsexg9ZDxCuF7M3ByB',
        redirectUri: 'http://localhost:3000/callback',
        audience: 'https://reactauth.eu.auth0.com/userinfo',
        responseType: 'token id_token',
        scope: 'openid'
    });

    login = () => this.auth0.authorize();

    handleAuthentication = () => {
        console.log('handling...');
        this.auth0.parseHash((err, res) => {
            err ? console.log('err: ', err) : console.log('success: ', res);
            if (res && res.accessToken && res.idToken) {
                const expiresAt = JSON.stringify((res.expiresIn * 1000) + new Date().getTime())

                localStorage.setItem('access_token', res.accessToken)
                localStorage.setItem('token_id', res.idToken)
                localStorage.setItem('expires_at', expiresAt)

                console.info('handled');
            }
            if (err) {
                console.error('error while handling: ', err)
            }
        })
    }

    logout() {
        localStorage.removeItem('access_token')
        localStorage.removeItem('token_id')
        localStorage.removeItem('expires_at')

        console.log('logout');
    }

    isAuthenticated() {
        const expiresAt = JSON.parse(localStorage.getItem('expires_at'))
        return expiresAt ? new Date().getTime < expiresAt : false
    }
}