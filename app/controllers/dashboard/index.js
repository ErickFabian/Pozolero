import Ember from 'ember';

const {
  Controller,
  computed
} = Ember;

export default Controller.extend({
  orders: computed.alias('model'),

  actions: {
    editOrder(order) {
      this.transitionToRoute('dashboard.orders.edit', order);
    }
  }
});
