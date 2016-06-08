import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'img',
  attributeBindings: ['alt', 'product.imageUrl:src'],
  classNameBindings: ['size', 'valign'],
  size: 'img-thumb',
  alt: 'UserAvatar',
  valign: 'valign'
});