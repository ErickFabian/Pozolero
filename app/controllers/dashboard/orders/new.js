import Ember from 'ember';
import Saveable from 'pozolero/mixins/saveable';
import OrderActions from 'pozolero/mixins/orders/actions';
import OrderProperties from 'pozolero/mixins/orders/properties';

const { Controller, computed } = Ember;

export default Controller.extend(
   OrderProperties, OrderActions, Saveable,  {

  order:    computed.alias('model.order'),
  clients:  computed.alias('model.clients'),
  products: computed.alias('model.products'),

  afterModelSaveSucceeded() {
    this.transitionToRoute('dashboard');
  },

  afterModelSaveFailed() {
    alert('server Error');
  }
});
