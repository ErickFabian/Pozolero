import Ember from 'ember';

const { Mixin, computed } = Ember;

const {
  mapBy,
  alias,
  sum,
  equal
} = computed;

export default Mixin.create({
  orderItems:       alias('order.orderItems'),
  orderItemsCost:   mapBy('orderItems', 'cost'),
  orderTotal:       sum('orderItemsCost'),
  orderIsCompleted: equal('order.status', 'completed'),
  orderTypes:       ['local', 'takeout'],

});
