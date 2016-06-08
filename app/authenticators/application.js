import DeviseAuthenticator from 'ember-simple-auth/authenticators/devise';
import config from '../config/environment';

export default DeviseAuthenticator.extend({
  serverTokenEndpoint: `${config.API.host}/users/sign_in`
});
