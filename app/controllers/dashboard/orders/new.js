import Ember from 'ember';
import Saveable from 'pozolero/mixins/saveable';

const {
  Controller,
  computed,
  A
} = Ember;

const {
  filterBy,
  mapBy,
  alias,
  sum
} = computed;

export default Controller.extend(Saveable, {
  order: computed.alias('model.order'),
  clients: computed.alias('model.clients'),
  products: computed.alias('model.products'),
  orderItems: computed.alias('order.orderItems'),
  orderItemsCost: mapBy('orderItems', 'cost'),
  orderTotal:     sum('orderItemsCost'),

  orderTypes: ['local', 'takeout'],

  actions: {
    create() {
      let order = this.get('order');
      this.saveModel(order);
    },

    addOrderItem(product) {
      let orderItems = this.get('orderItems');
      let orderItemsProducts= orderItems.mapBy('product.id');

      if (orderItemsProducts.contains(product.get('id'))) {
        orderItems.findBy('product.id', product.id).
          incrementProperty('quantity', 1);
      } else {
        orderItems.createRecord({
          product: product,
          quantity: '1'
        });
      }
    },

    deleteOrderItem(product) {
      let orderItems = this.get('orderItems');
      let orderItemsProducts= orderItems.mapBy('product.id');

      if (orderItemsProducts.contains(product.get('id'))) {
        let orderItem = orderItems.findBy('product.id', product.id);
        if (orderItem.get('quantity') > 0) {
          orderItem.decrementProperty('quantity', 1);
        }
        if (orderItem.get('quantity') ===  0) {
          orderItem.deleteRecord();
        }
      }
    }
  },

  afterModelSaveSucceeded() {
    this.transitionToRoute('dashboard');
  },

  afterModelSaveFailed() {

  }
});
