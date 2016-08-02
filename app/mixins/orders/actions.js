import Ember from 'ember';

const {
  Mixin,
  computed
} = Ember;

const {
  mapBy,
  alias,
  sum
} = computed;

export default Mixin.create({
  actions: {
    save() {
      let order = this.get('order');
      this.saveModel(order);
    },

    addOrderItem(product) {
      let orderItems = this.get('orderItems');
      let orderItemsProducts = orderItems.mapBy('product.id');
      orderItemsProducts = Array.from(new Set(orderItemsProducts));

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
      orderItemsProducts = Array.from(new Set(orderItemsProducts));

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
  }
});
