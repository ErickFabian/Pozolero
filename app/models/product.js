import DS from 'ember-data';

const {
  Model,
  attr,
} = DS;

const defaultImageUrl = '/assets/images/default-product-image.jpg';

export default Model.extend({
  name:         attr('string'),
  cost:         attr('number'),
  description:  attr('string'),
  imageUrl:     attr('string', { defaultValue: defaultImageUrl }),
  image:        attr('file'),
});
