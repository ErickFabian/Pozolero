import Ember from 'ember';

const {
  Component,
  computed
} = Ember;

const {
  filterBy,
  mapBy,
  alias,
  sum
} = computed;

export default Component.extend({
  classNames: ['col', 's12', 'm6'],
  client:         alias('order.client'),
  orderItems:     filterBy('order.orderItems', 'isNew', false),
  orderItemsCost: mapBy('orderItems', 'cost'),
  orderTotal:     sum('orderItemsCost'),
  editAction: 'editOrder',

  actions: {
    edit() {
      this.sendAction('editAction', this.get('order'));
    }
  }
});
