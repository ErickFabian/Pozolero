import Ember from 'ember';

export default Ember.Mixin.create({
  validate(model) {
    model.validate().then(response => {
      model.set('didValidate', true);
      return response.validations.get('isValid') ?
        this.validationSucceeded(response.model) :
        this.validationFailed(response.model);
    });
  },

  // Default validation callbacks.
  validationSucceeded() {},

  validationFailed() {
    let message = this.validationFailedMessage();
    this.send('setAlert', message, 'danger');
  },

  // Default message helpers.
  validationFailedMessage() {
    return this.i18n.t('errors.message');
  },

  contactSupportMessage() {
    return this.i18n.t('errors.contactSupport');
  },

  validationErrorMessage(model) {
    return model.get('validations.isValid') ?
      this.contactSupportMessage() :
      this.validationFailedMessage();
  }
});
