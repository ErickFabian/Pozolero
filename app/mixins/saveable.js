import Ember from 'ember';

export default Ember.Mixin.create({
   saveModel(model) {
    model = model || this.get('model');

    model.save().then((response) => {
      this.afterModelSaveSucceeded(response);
    }, (response) => {
      this.afterModelSaveFailed(response);
    });
  },

  afterModelSaveSucceeded() {},
  afterModelSaveFailed() {}
});
