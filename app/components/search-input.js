import Ember from 'ember';

export default Ember.TextField.extend({
  param: null,
  timeout: 400,

  setValue: function() {
    this.$().val(this.get('param'));
  }.on('didInsertElement'),

  becomeSearchable: function() {
    var timeout = this.get('timeout'),
        self = this, reference;

    this.$().on('input', function() {
      clearTimeout(reference);
      reference = setTimeout(function() {
        self.set('param', self.$().val());
      }, timeout);
    });
  }.on('didInsertElement')
});
