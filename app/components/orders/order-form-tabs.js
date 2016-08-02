import Ember from 'ember';

const {
  Component
} = Ember;

export default Component.extend({
  didInsertElement() {
    this.$('ul.tabs').tabs();
  }
});
