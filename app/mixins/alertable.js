import Ember from 'ember';

export default Ember.Mixin.create({
  actions: {
    didTransition() {
      this.send('clearAlert');
      return true;
    },

    setAlert(message, type) {
      this.controller.setProperties({
        alertMessage: message,
        alertType: type
      });
    },

    clearAlert() {
      this.controller.setProperties({
        alertMessage: null,
        alertType: null
      });
    }
  }
});
