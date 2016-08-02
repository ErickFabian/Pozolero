import Ember from 'ember';
import DirtyRecordDeleter from 'pozolero/mixins/dirty_record_deleter';

export default Ember.Route.extend(DirtyRecordDeleter, {
  model() {
    return this.store.createRecord('product');
  },

  actions: {
     willTransition() {
        this.clearDirtyRecords('product');
     }
  }
});
