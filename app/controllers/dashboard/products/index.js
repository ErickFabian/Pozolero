import Ember from 'ember';

const {
  Controller,
  computed
} = Ember;

export default Controller.extend({
  products: computed.alias('model')
});
