import Ember from 'ember';

const {
  Controller,
  inject
} = Ember;

const {
  service
} = inject;

export default Controller.extend({
  session: service(),
  identification: '',
  password: '',

  actions: {
    authAction() {
      let { identification, password } = this.getProperties('identification', 'password');
      this.get('session').authenticate('authenticator:application', identification, password).catch((response) => {
        this.send('authenticationFailed', response);
        this.transitionToRoute('dashboard');
      });
    }
  }
});
