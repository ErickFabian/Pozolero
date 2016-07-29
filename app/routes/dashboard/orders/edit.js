import Ember from 'ember';

const {
  Route,
  RSVP
} = Ember;

export default Route.extend({
  model(params) {
    return RSVP.hash({
      order:    this.store.find('order', params.order_id),
      clients:  this.store.findAll('client'),
      products: this.store.findAll('product')
    });
  }
});
