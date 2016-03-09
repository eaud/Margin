import DeviseAuthenticator from 'ember-simple-auth/authenticators/devise';

export default DeviseAuthenticator.extend({
  serverTokenEndpoint: "http://margin-api.herokuapp.com/users/sign_in"
});
