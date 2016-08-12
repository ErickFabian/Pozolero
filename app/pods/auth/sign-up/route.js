import Ember from 'ember';
import Alertable from 'pozolero/mixins/alertable';
import Authenticatable from 'pozolero/mixins/authenticable';

export default Ember.Route.extend(
  Authenticatable,
  Alertable, {

  model() {
    return this.store.createRecord('auth/signUp');
  },

  validationSucceeded(model) {
    this.get('authentication').signUp(model).then(
      response => this.authActionSucceeded(response),
      response => this.authActionFailed(response)
    );
  },

  authActionSucceeded() {
    this.transitionTo('dashboard').then(() => {
      let message = this.i18n.t('auth.signedInSucceeded');
      this.send('setAlert', message, 'success');
    });
  }
});