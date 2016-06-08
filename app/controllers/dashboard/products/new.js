import Ember from 'ember';
import Saveable from 'pozolero/mixins/saveable';

const {
  Controller,
  computed
} = Ember;

export default Controller.extend(Saveable, {
  product: computed.alias('model'),

  actions: {
    create() {
      let product = this.get('product');
      this.saveModel(product);
    },

    upload() {
      Ember.$('#productImage').trigger('click');
    }
  },

  afterModelSaveSucceeded() {
    this.transitionToRoute('dashboard.products')
  },

  afterModelSaveFailed() {
    console.log('failed save Product');
  }
});
