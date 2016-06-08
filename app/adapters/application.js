import ActiveModelAdapter from 'active-model-adapter';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';
import config from '../config/environment';
import { camelizeObject } from 'pozolero/mixins/objectable';

export default ActiveModelAdapter.extend(DataAdapterMixin, {

  host: config.API.host,
  authorizer: 'authorizer:application',

  handleResponse(status, headers, payload) {
    if (this.isInvalid(status, headers, payload)) {
      return camelizeObject(payload);
    } else if (this.isServerError(status)) {
      return {};
    } else {
      return this._super(...arguments);
    }
  },

  isServerError(status) {
    return status === 500;
  }
});
