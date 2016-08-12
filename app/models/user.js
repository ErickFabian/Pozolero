
import Ember from 'ember';
import DS from 'ember-data';
import {
  validator, buildValidations
}
from 'ember-cp-validations';

const Validations = buildValidations({
  password: [
    validator('presence', true),
    validator('length', {
      min: 4,
      max: 8
    })
  ],
  email: [
    validator('presence', true),
    validator('format', { type: 'email' })
  ]
});

const {
  Model,
  attr,
} = DS;

const { computed } = Ember;

export default Model.extend(Validations, {
  'firstName':      attr('string'),
  'lastName':       attr('string'),
  'address':        attr('string'),
  'phoneNumber':    attr('string'),

  // Properties
  fullName: computed('firstName', 'lastName', function() {
    return `${this.get('firstName')} ${this.get('lastName')}`;
  })
});



