import Ember from 'ember';

let transformObjectKeys = (object, transform) => {
  return Object.keys(object).reduce((result, key) => {
    let value = isNestedObject(object[key]) ?
      transformObjectKeys(object[key], transform) : object[key];
    result[Ember.String[transform](key)] = value;
    return result;
  }, {});
};

let isNestedObject = (value) => {
  return (value instanceof(Object)) && !(value instanceof(Array));
};

let camelizeObjectKeys = (object) => {
  return transformObjectKeys(object, 'camelize');
};

let underscoreObjectKeys = (object) => {
  return transformObjectKeys(object, 'underscore');
};

export {
  camelizeObjectKeys,
  underscoreObjectKeys
};