import Ember from 'ember';

export default Ember.Mixin.create({
  clearDirtyRecords(model) {
    this.store.peekAll(model).forEach((model) => {
      if (model.get('isNew')) {
        model.unloadRecord();
      }
    });
  }
});
