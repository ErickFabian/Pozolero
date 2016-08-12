import Ember from 'ember';
import Authenticatable from 'pozolero/mixins/authenticable';

export default Ember.Route.extend(Authenticatable, {
  model() {
    return this.store.createRecord('auth/password/new');
  },

  validationSucceeded(model) {
    this.get('authentication').newPassword(model).then(
      response => this.authActionSucceeded(response),
      response => this.authActionFailed(response)
    );
  },

  authActionSucceeded() {
    this.transitionTo('auth.password.edit').then(() => {
      let message = this.i18n.t('auth.resetPasswordInstructionsSent');
      this.send('setAlert', message, 'warning');
    });
  }
});