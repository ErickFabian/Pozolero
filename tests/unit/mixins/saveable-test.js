import Ember from 'ember';
import SaveableMixin from 'pozolero/mixins/saveable';
import { module, test } from 'qunit';

module('Unit | Mixin | saveable');

// Replace this with your real tests.
test('it works', function(assert) {
  let SaveableObject = Ember.Object.extend(SaveableMixin);
  let subject = SaveableObject.create();
  assert.ok(subject);
});
