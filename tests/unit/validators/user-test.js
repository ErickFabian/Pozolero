import { moduleFor, test } from 'ember-qunit';

moduleFor('validator:user', 'Unit | Validator | user', {
  needs: ['validator:messages']
});

test('it works', function(assert) {
  var validator = this.subject();
  assert.ok(validator);
});
