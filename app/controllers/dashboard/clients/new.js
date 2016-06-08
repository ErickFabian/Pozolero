import Ember from 'ember';

const {
  Controller,
  computed
} = Ember;

export default Controller.extend({
  client: computed.alias('model'),

  actions: {
    create() {
      let client = this.get('client');
      client.save().then(this.onSuccess(), this.onFail());
    }
  },

  onSuccess(client) {
    console.log('success');
    this.transitionToRoute('dashboard.clients');
  },

  onFail(client) {
    console.log('failure');
  }
});
