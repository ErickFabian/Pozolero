import Ember from 'ember';

const {
  Controller,
  computed
} = Ember;

export default Controller.extend({
  clients: computed.alias('model')
});
