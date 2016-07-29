import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'img',
  attributeBindings: ['alt', 'product.imageUrl:src'],
  classNameBindings: ['size'],
  size: 'img-preview',
  alt: 'UserAvatar'
});