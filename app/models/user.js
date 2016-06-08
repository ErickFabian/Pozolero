import Ember from 'ember';
import DS from 'ember-data';
import { validator, buildValidations } from 'ember-cp-validations';

const {
  Model,
  attr,
} = DS;


const { computed } = Ember;

export default Model.extend({
  'firstName':      attr('string'),
  'lastName':       attr('string'),
  'address':        attr('string'),
  'phoneNumber':    attr('string'),

  // Properties
  fullName: computed('firstName', 'lastName', function() {
    return `${this.get('firstName')} ${this.get('lastName')}`;
  })
});
