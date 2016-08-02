import Ember from 'ember';
import OrderProperties from 'pozolero/mixins/orders/properties';

const { Component, computed } = Ember;

export default Component.extend(OrderProperties, {
  classNames:     ['col', 's12', 'm6'],
  client:         computed.alias('order.client'),
  editAction:     'editOrder',
  changeProgress: 'changeProgress',
  deleteAction:   'deleteOrder',

  orderTypeBadgeClasses: {
    'local':    'orange',
    'takeout':  'cyan'
  },

  orderTitle: computed('order.id', function() {
    return `Order: ${this.get('order.id')}`;
  }),

  computedClasses: computed('order.status', function() {
    return `order-item-status ${this.get('order.status')}`;
  }),

  orderTypeBadgeClass: computed('order.type', function() {
    return this.get('orderTypeBadgeClasses')[this.get('order.type')];
  }),

  actions: {
    edit() {
      if (!this.get('orderIsCompleted')) {
        this.sendAction('editAction', this.get('order'));
      }
    },

    changeProgress() {
      if (!this.get('orderIsCompleted')) {
        this.sendAction('changeProgress', this.get('order'));
      }
    },

    delete() {
      this.sendAction('deleteAction', this.get('order'));
    }
  }
});
