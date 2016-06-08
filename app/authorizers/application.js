import Ember from 'ember';
import DeviseAuthorizer from 'ember-simple-auth/authorizers/devise';

const { isEmpty } = Ember;

export default DeviseAuthorizer.extend({
  authorize(data, block) {
    const userToken = data[this.get('tokenAttributeName')];
    const userEmail = data[this.get('identificationAttributeName')];

    if (!isEmpty(userToken) && !isEmpty(userEmail)) {
      block('X-User-Email', userEmail);
      block('X-User-Token', userToken);
    }
  }
});