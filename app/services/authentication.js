import Ember from 'ember';
import { underscoreObjectKeys } from 'pozolero/mixins/objectable';

const { inject, getOwner } = Ember;

export default Ember.Service.extend({
  session: inject.service('session'),
  authenticator: 'authenticator:application',


  signIn(user) {
    let email = user.get('email');
    let session = this.get('session');
    let password = user.get('password');
    let authenticator = this.get('authenticator');
    return session.authenticate(authenticator, email, password);
  },


  signUpMethod: 'POST',
  signUpEndPoint: 'users',
  signUpAttrs: [
    'email',
    'password',
    'lastName',
    'firstName',
    'passwordConfirmation'
  ],

  signUp(user) {
    let attrs = this.get('signUpAttrs');
    let data = this.userData(user, attrs);
    let method = this.get('signUpMethod');
    let endPoint = this.get('signUpEndPoint');
    return this.makeRequest(endPoint, method, data);
  },


  newPasswordMethod: 'POST',
  newPasswordEndPoint: 'users/password',
  newPasswordAttrs: ['email'],

  newPassword(user) {
    let attrs = this.get('newPasswordAttrs');
    let data = this.userData(user, attrs);
    let method = this.get('newPasswordMethod');
    let endPoint = this.get('newPasswordEndPoint');
    return this.makeRequest(endPoint, method, data);
  },


  resetPasswordMethod: 'PUT',
  resetPasswordEndPoint: 'users/password',
  resetPasswordAttrs: [
    'password',
    'resetPasswordToken',
    'passwordConfirmation'
  ],

  resetPassword(user) {
    let attrs = this.get('resetPasswordAttrs');
    let data = this.userData(user, attrs);
    let method = this.get('resetPasswordMethod');
    let endPoint = this.get('resetPasswordEndPoint');
    return this.makeRequest(endPoint, method, data);
  },


  newConfirmationMethod: 'POST',
  newConfirmationEndPoint: 'users/confirmation',
  newConfirmationAttrs: ['email'],

  newConfirmation(user) {
    let attrs = this.get('newConfirmationAttrs');
    let data = this.userData(user, attrs);
    let method = this.get('newConfirmationMethod');
    let endPoint = this.get('newConfirmationEndPoint');
    return this.makeRequest(endPoint, method, data);
  },


  confirmAccountMethod: 'GET',
  confirmAccountEndPoint: 'users/confirmation',

  confirmAccount(token) {
    let data = this.authData({ confirmationToken: token});
    let method = this.get('confirmAccountMethod');
    let endPoint = this.get('confirmAccountEndPoint');
    return this.makeRequest(endPoint, method, data);
  },


  makeRequest(endPoint, method, data) {
    let adapter = this.getAdapter();
    let url = `${adapter.host}/${endPoint}`;
    return adapter.ajax(url, method, data);
  },

  userData(user, attrs) {
    let data = user.getProperties(attrs);
    return this.authData({ user: data });
  },

  authData(data) {
    return { data: underscoreObjectKeys(data) };
  },

  getAdapter() {
    let adapter = 'adapter:application';
    return getOwner(this).lookup(adapter);
  }
});