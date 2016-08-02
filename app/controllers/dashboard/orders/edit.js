import Ember from 'ember';
import Saveable from 'pozolero/mixins/saveable';
import OrderActions from 'pozolero/mixins/orders/actions'

export default Ember.Controller.extend(
  OrderActions, Saveable, {

  afterModelSaveSucceeded() {
    this.transitionToRoute('dashboard');
  },

  afterModelSaveFailed() {
    alert('server Error');
  }
});
