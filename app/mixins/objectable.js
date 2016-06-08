import Ember from 'ember';

var transformObjectKeys = function(object, transform) {
  var newObject = {};

  Object.keys(object).forEach(function(key) {
    if ((object[key] instanceof(Object)) && !(object[key] instanceof(Array))) {
      newObject[Ember.String[transform](key)] = transformObjectKeys(object[key], transform);
    } else {
      newObject[Ember.String[transform](key)] = object[key];
    }
  });

  return newObject;
};

var camelizeObject = function(object) {
  return transformObjectKeys(object, 'camelize');
};

var underscoreObject = function(object) {
  return transformObjectKeys(object, 'underscore');
};

export { camelizeObject, underscoreObject };
