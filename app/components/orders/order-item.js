import Ember from 'ember';

const {
  Component,
  computed
} = Ember;

export default Component.extend({
  addAction: 'addOrderItem',
  deleteAction: 'deleteOrderItem',

  computedClasses: computed('orderItem.quantity', function() {
    if (this.get('orderItem.quantity') > 0) {
      return 'order-item order-item-selected';
    }
    return 'order-item';
  }),

  orderItem: computed('order.orderItems.[]', 'product.id', function() {
    return this.get('order.orderItems').
      findBy('product.id', this.get('product.id'));
  }),

  actions: {
    add() {
      this.sendAction('addAction', this.get('product'));
    },

    delete() {
      this.sendAction('deleteAction', this.get('product'));
    }
  }
});
