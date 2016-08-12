import DS from 'ember-data';
import { validator, buildValidations } from 'ember-cp-validations';

const Validations = buildValidations({
  email: {
    validators: [
      validator('presence', true),
      validator('format', { type: 'email' }),
      validator('ds-error')
    ]
  },
  firstName: {
    validators: [
      validator('presence', true),
      validator('ds-error')
    ]
  },
  lastName: {
    validators: [
      validator('presence', true),
      validator('ds-error')
    ]
  },
  password: {
    validators: [
      validator('presence', true),
      validator('length', {
        min: 4,
        max: 12
      }),
      validator('ds-error')
    ]
  },
  passwordConfirmation: [
    validator('presence', true),
    validator('confirmation', {
      on: 'password'
    })
  ]
});

const {
  Model,
  attr
} = DS;

export default Model.extend(Validations, {
  email:                attr('string'),
  firstName:            attr('string'),
  lastName:             attr('string'),
  password:             attr('string'),
  passwordConfirmation: attr('string')
});