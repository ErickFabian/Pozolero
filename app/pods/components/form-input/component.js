import Ember from 'ember';

const {
  Component,
  defineProperty,
  computed
} = Ember;

export default Component.extend({
  model: null,
  value: null,
  label: null,
  type: 'text',
  valuePath: '',
  placeholder: '',
  validation: null,
  spellcheck: true,
  isTyping: false,

  isValid:        computed.and('validation.isValid', 'notValidating'),
  isInvalid:      computed.and('validation.isInvalid', 'notValidating'),
  notValidating:  computed.not('validation.isValidating'),
  showMessage:    computed.and('model.didValidate', 'isInvalid'),

  init() {
    this._super(...arguments);
    this.defineValueProperty();
    this.defineValidationProperty();
  },

  defineValueProperty() {
    let dependentKey = `model.${this.get('valuePath')}`;
    defineProperty(this, 'value', computed.alias(dependentKey));
  },

  defineValidationProperty() {
    let valuePath = this.get('valuePath');
    let dependentKey = `model.validations.attrs.${valuePath}`;
    defineProperty(this, 'validation', computed.oneWay(dependentKey));
  }
});
