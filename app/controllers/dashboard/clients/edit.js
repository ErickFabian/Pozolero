import Ember from 'ember';

const {
  Controller,
  computed
} = Ember;

export default Controller.extend({
  client: computed.alias('model'),

  actions: {
    save() {
      let client = this.get('client');
      client.save().then(this.onSuccess(), this.onFail());
    }
  },

  onSuccess() {
    this.transitionToRoute('dashboard.clients');
  },

  onFail() {
    console.log('failure');
  }
});
