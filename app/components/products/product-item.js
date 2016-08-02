import Ember from 'ember';

export default Ember.Component.extend({
  editAction:'editProduct',
  deleteAction: 'deleteProduct',

  actions: {
    edit() {
      this.sendAction('editAction', this.get('product'));
    },

    delete() {
      this.sendAction('deleteAction', this.get('product'));
    }
  }
});
