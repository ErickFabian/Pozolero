import Ember from 'ember';
import DS from 'ember-data';
import { ActiveModelSerializer } from 'active-model-adapter';

const { EmbeddedRecordsMixin } = DS;
const { underscore } = Ember.String;

export default ActiveModelSerializer.extend(EmbeddedRecordsMixin, {
  nestedAssociations: [],

  keyForAttribute(key) {
    if (this.get('nestedAssociations').contains(key)) {
      return underscore(key) + '_attributes';
    } else {
      return this._super(...arguments);
    }
  },

  normalize(typeClass, hash) {
    this.sanitizePayload(hash);
    return this._super(...arguments);
  },

  sanitizePayload(hash) {
    for (let prop in hash) {
      if (this.shouldRemoveFromPayload(hash, prop)) {
        delete hash[prop];
      }
    }
  },

  shouldRemoveFromPayload(hash, prop) {
    return hash.hasOwnProperty(prop) &&
      (hash[prop] === undefined || hash[prop] === null);
  }
});