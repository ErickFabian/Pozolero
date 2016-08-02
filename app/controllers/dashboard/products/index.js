import Ember from 'ember';

const {
  Controller,
  computed
} = Ember;

export default Controller.extend({
  products: computed.alias('model'),

  actions: {
    editProduct(product) {
      this.transitionToRoute('dashboard.products.edit', product);
    },

    deleteProduct(product) {
      product.destroyRecord();
    }
  }
});
