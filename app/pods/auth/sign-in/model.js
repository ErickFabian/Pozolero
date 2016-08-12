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
  password: {
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
  email:    attr('string'),
  password: attr('string')
});