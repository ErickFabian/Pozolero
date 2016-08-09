import Ember from 'ember';
import { underscoreObject } from 'pozolero/mixins/objectable';

export default Ember.Mixin.create({
  searchParamsKeys: [],

  sanitizeParams(params, searchKey = 'q') {
    let _params = this.sanitizeSearchParams(params, searchKey);
    return underscoreObject(_params);
  },

  sanitizeSearchParams(params, searchKey = 'q') {
    params[searchKey] = {};

    Object.keys(params).forEach((key) => {
      if (this.get('searchParamsKeys').contains(key)) {
        params[searchKey][key] = params[key];
        delete params[key];
      }
    });

    return params;
  }
});