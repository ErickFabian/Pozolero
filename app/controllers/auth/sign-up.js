import Ember from 'ember';

const {
  Controller,
  computed
} = Ember;

export default Controller.extend({
  user: computed.alias('model'),
  authModel: 'user',

  actions: {
    authAction() {
      this.performAuthAction();
    }
  },

  performAuthAction() {
    let data = this.authRequestData();

    this.authRequest(data).then((response) => {
      Ember.run(() => {
        this.authActionSucceeded(response);
      });
    }, (xhr) => {
      Ember.run(() => {
        this.authActionFailed(xhr.responseJSON || xhr.responseText);
      });
    });
  },

  authRequestData() {
    return this.authFormData(this.get('model'), [
      'email',
      'password',
      'firstName',
      'lastName'
    ]);
  },

  authFormData(object, props) {
    let data = new FormData(),
        properties = object.getProperties(props),
        namespace = this.get('authModel');

    Object.keys(properties).forEach((key) => {
      if ([null, undefined].indexOf(properties[key]) < 0) {
        let property = namespace + '[' + Ember.String.underscore(key) + ']';
        data.append(property, properties[key]);
      }
    });


    return data;
  },

  authRequest(data) {
    return Ember.$.ajax({
      url:          this.endpoint(),
      type:         'POST',
      data:         data,
      dataType:     'json',
      processData:  false,
      contentType:  false
    });
  },

  endpoint() {
    let adapter = Ember.getOwner(this).lookup('adapter:application');
    return adapter.buildURL(this.get('authModel'));
  },

  authActionSucceeded() {
    let message = 'message';
    this.transitionToRoute('auth.sign-in').promise.then(() => {
      console.log('success');
    });
  },

  authActionFailed(response) {
    console.log('erors', response);
  }
});
