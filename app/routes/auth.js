import Ember from 'ember';
import UnauthenticatedRouteMixin from 'ember-simple-auth/mixins/unauthenticated-route-mixin';

export default Ember.Route.extend(UnauthenticatedRouteMixin, {
  setAuthenticationLayout: function () {
    this.send('changeLayout', 'authentication');
  }.on('activate'),

  setApplicationLayout: function() {
    this.send('changeLayout', 'application');
  }.on('deactivate'),

  actions: {
    authenticationFailed(response) {
      console.log('auth fail');
    }
  }
});
