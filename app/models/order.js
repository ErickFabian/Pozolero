import DS from 'ember-data';
import { buildValidations } from 'ember-cp-validations';

const Validations = buildValidations({
});

const {
  Model,
  attr,
  belongsTo,
  hasMany
} = DS;

export default Model.extend(Validations, {
  status:     attr('string', { defaultValue: 'new' }),
  note:       attr('string'),
  total:      attr('string',  { defaultValue: '0' }),
  createdAt:  attr('date'),
  type:       attr('string', { defaultValue: 'local' }),
  client:     belongsTo(),
  orderItems: hasMany()
});
