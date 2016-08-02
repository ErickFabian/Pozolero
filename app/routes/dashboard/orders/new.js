import Ember from 'ember';
import DirtyRecordDeleter from 'pozolero/mixins/dirty_record_deleter';

const { Route, RSVP } = Ember;

export default Route.extend(DirtyRecordDeleter, {
  model() {
    return RSVP.hash({
      order:    this.store.createRecord('order'),
      clients:  this.store.findAll('client'),
      products: this.store.findAll('product')
    });
  },

  actions: {
     willTransition() {
        this.clearDirtyRecords('order');
        this.clearDirtyRecords('orderItem');
     }
  }
});