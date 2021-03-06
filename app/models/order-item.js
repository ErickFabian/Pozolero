import Ember from 'ember';
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
  quantity: attr('string'),
  product:  belongsTo('product'),

  // Properties
  cost: Ember.computed('quantity', 'product.cost', function() {
    return this.get('quantity') * this.get('product.cost');
  })
});
