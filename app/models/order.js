import DS from 'ember-data';
import { validator, buildValidations } from 'ember-cp-validations';

const Validations = buildValidations({
});

const {
  Model,
  attr,
  belongsTo,
  hasMany
} = DS;

export default Model.extend(Validations, {
  note:       attr('string'),
  total:      attr('string',  { defaultValue: '0' }),
  createdAt:  attr('date'),
  type:       attr('string', { defaultValue: 'local' }),
  client:     belongsTo('client'),
  orderItems: hasMany('orderItem')
});
