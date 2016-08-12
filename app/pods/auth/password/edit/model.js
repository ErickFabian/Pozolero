import DS from 'ember-data';
import { validator, buildValidations } from 'ember-cp-validations';

const Validations = buildValidations({
  password: {
    validators: [
      validator('presence', true),
      validator('length', { min: 8 }),
      validator('ds-error')
    ]
  },
  passwordConfirmation: {
    validators: [
      validator('presence', true),
      validator('confirmation', { on: 'password' }),
      validator('ds-error')
    ]
  },
  resetPasswordToken: {
    validators: [
      validator('presence', true),
      validator('ds-error')
    ]
  }
});

const {
  Model,
  attr
} = DS;

export default Model.extend(Validations, {
  password:             attr('string'),
  passwordConfirmation: attr('string')
});