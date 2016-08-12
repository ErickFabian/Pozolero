import Ember from 'ember';

const { Component, computed } = Ember;

export default Component.extend({
  tagName: 'button',
  classNames: ['btn', 'waves-effect', 'waves-light'],
  attributeBindings: ['type'],
  title: 'submit',
  iconClasses: ['material-icons', 'right'],

  iconClass: computed('iconClasses', function() {
    return this.get('iconClasses').join(' ');
  })
});
