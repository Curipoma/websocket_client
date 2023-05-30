const _domain = 'http://localhost:8000';
const _host = _domain + '/api/v1/';

export const environment = {
  production: false,
  API_DOMAIN: _domain,
  API_URL: _host,
  VERSION: '1.0.1',
  pusher: {
    broadcaster: 'pusher',
    key: 'h4fg56',
    cluster: 'mt1',
    port: 6001,
    wsHost: "localhost",
    authEndpoint: _host + "auth/broadcasting/auth",
  },
};
