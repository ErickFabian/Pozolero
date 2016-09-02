import Ember from 'ember';

const {
  Controller,
  computed
} = Ember;

export default Controller.extend({
  clients: computed.alias('model'),

  actions: {
    edit(client) {
      this.transitionToRoute('dashboard.clients.edit', client);
    },

    delete(client) {
      client.destroyRecord();
    }
  }
});
