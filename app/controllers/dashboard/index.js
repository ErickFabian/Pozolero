import Ember from 'ember';
import Saveable from 'pozolero/mixins/saveable';

const {
  Controller,
  computed
} = Ember;

export default Controller.extend(Saveable, {
  orders: computed.alias('model'),

  actions: {
    editOrder(order) {
      this.transitionToRoute('dashboard.orders.edit', order.get('id'));
    },

    changeProgress(order) {
      let currentStatus = order.get('status');
      if (currentStatus === 'new') {
        order.set('status', 'in-progress');
      }
      if (currentStatus === 'in-progress') {
        order.set('status', 'completed');
      }
      this.saveModel(order);
    },

    deleteOrder(order) {
      order.destroyRecord();
    }
  }
});
