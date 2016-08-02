import Ember from 'ember';

const { Component, computed } = Ember;

export default Component.extend({
  orderItemsCost: computed.mapBy('orderItems', 'cost'),
  orderTotal:     computed.sum('orderItemsCost'),
});
