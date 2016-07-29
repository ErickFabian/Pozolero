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

  actions: {
    invalidateSession() {
      this.get('session').invalidate();
    },

    createOrder() {
      this.transitionToRoute('dashboard.orders.new');
    },

    viewClients() {
      this.transitionToRoute('dashboard.clients');
    },

    viewProducts() {
      this.transitionToRoute('dashboard.products');
    }
  }
});