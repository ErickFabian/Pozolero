import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      order: this.store.createRecord('order'),
      clients: this.store.findAll('client'),
      products: this.store.findAll('product')
    });
  }
});
