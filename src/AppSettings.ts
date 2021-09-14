export const server = 'http://localhost:5000';

export const webAPIUrl = `${server}/api`;

export const authSettings = {
  domain: 'dev-6keg3xns.us.auth0.com',
  client_id: 'usstSDmjKIVVcACVDF4NahVMdfBYEyGC',
  redirect_uri: window.location.origin + '/signin-callback',
  scope: 'openid profile QandAAPI email',
  audience: 'https://qanda',
};
