import Ember from 'ember';
import Validable from 'pozolero/mixins/validable';

const {
  Mixin,
  inject,
  get
} = Ember;

const { camelize } = Ember.String;

export default Mixin.create(Validable, {
  authentication: inject.service(),

  // Default auth callbacks.
  authActionSucceeded() {},

  authActionFailed(response) {
    let model = this.currentModel;
    this.handleServerErrors(model, response);
    let defaultMsg = this.validationErrorMessage(model);
    let message = response.error || defaultMsg;
    this.send('setAlert', message, 'danger');
  },

  handleServerErrors(model, response) {
    if (response.errors) {
      this.setServerErrors(model, response);
    }
  },

  setServerErrors(model, response) {
    response.errors.forEach(error => {
      let data = error.source.pointer.split('/');
      let attr = camelize(get(data, 'lastObject'));
      model.get('errors').add(attr, error.detail);
    });
  },

  actions: {
    authAction(model) {
      this.validate(model);
    }
  }
});
