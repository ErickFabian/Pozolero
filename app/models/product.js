import Ember from 'ember';
import DS from 'ember-data';
import { validator, buildValidations } from 'ember-cp-validations';

const {
  Model,
  attr,
} = DS;

const { computed } = Ember;
const defaultImageUrl = '/assets/images/default-product-image.jpg';

export default Model.extend({
  name:         attr('string'),
  cost:         attr('number'),
  description:  attr('string'),
  imageUrl:     attr('string', { defaultValue: defaultImageUrl }),
  image:        attr('file'),
});
