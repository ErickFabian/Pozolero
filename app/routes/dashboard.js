import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model() {
    return this.store.findAll('order');
  },

  actions: {
    authenticationFailed: function(response) {
      let message = response.error || this.get('i18n').t('errors.serverError');
      this.send('setAlert', message, 'danger');
    }
  }
});
