import Ember from 'ember';

const {
  Component,
  computed
} = Ember;

export default Component.extend({
  classNames: ['card-panel', 'lighten-1'],
  classNameBindings: ['alertType'],
  message: null,
  type: 'warning',
  alertMessageClass: 'white-text',

  alertTypeClass: {
    'success': 'green',
    'warning': 'yellow',
    'danger': 'red'
  },


  alertType: computed('type', function() {
    return this.get('alertTypeClass')[this.get('type')];
  })
});
