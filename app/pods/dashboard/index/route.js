import Ember from 'ember';
import ParamSanitizer from 'pozolero/mixins/param-sanitizer';
import RouteMixin from 'ember-cli-pagination/remote/route-mixin';

export default Ember.Route.extend(ParamSanitizer, RouteMixin, {

  searchParamsKeys: [
    'createdAtEq',
    'clientFirstNameCont',
  ],

  queryParams: {
    clientFirstNameCont: {
      replace: true,
      refreshModel: true
    },
    createdAtEq: {
      replace: true,
      refreshModel: true
    }
  },

  model(params) {
    return this.findPaged('order', this.searchParams(params));
  },

  searchParams(queryParams = {}) {
    let params = {
      'perPage': '4'
    };
    Ember.merge(params, queryParams);
    return this.sanitizeParams(params);
  }
});
