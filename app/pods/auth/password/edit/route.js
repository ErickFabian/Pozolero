import Ember from 'ember';
import Alertable from 'pozolero/mixins/alertable';
import Authenticatable from 'pozolero/mixins/authenticable';

export default Ember.Route.extend(
  Authenticatable,
  Alertable, {

  model() {
    return this.store.createRecord('auth/password/edit');
  },

  validationSucceeded(model) {
    this.get('authentication').resetPassword(model).then(
      response => this.authActionSucceeded(response),
      response => this.authActionFailed(response)
    );
  },

  authActionSucceeded() {
    this.transitionTo('auth.sign-in').then(() => {
      let message = this.i18n.t('auth.resetPasswordSucceeded');
      this.send('setAlert', message, 'success');
    });
  }
});
