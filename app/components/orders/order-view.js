import Ember from 'ember';

const {
  Component,
  computed
} = Ember;

const {
  filterBy,
  mapBy,
  alias,
  sum,
  equal
} = computed;

export default Component.extend({
  classNames:     ['col', 's12', 'm6'],
  client:         alias('order.client'),
  orderItems:     filterBy('order.orderItems', 'isNew', false),
  orderItemsCost: mapBy('orderItems', 'cost'),
  orderTotal:     sum('orderItemsCost'),
  editAction:     'editOrder',
  changeProgress: 'changeProgress',
  deleteAction:   'deleteOrder',
  orderIsCompleted: equal('order.status', 'completed'),

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
  })

  actions: {
    edit() {
      this.sendAction('editAction', this.get('order'));
    },

    changeProgress() {
      this.sendAction('changeProgress', this.get('order'));
    },

    delete() {
      this.sendAction('deleteAction', this.get('order'));
    }
  }
});
