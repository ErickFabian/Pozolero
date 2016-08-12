import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('dashboard', function () {
    this.route('orders', function () {
      this.route('new');
      this.route('edit', { path: '/:order_id/edit' });
    });

    this.route('clients', function () {
      this.route('new');
      this.route('edit', { path: '/:client_id/edit' });
    });

    this.route('products', function () {
      this.route('new');
      this.route('edit', { path: '/:product_id/edit' });
     });
  });

  this.route('auth', function () {
     this.route('sign-in');
     this.route('sign-up');

     this.route('password', function() {
       this.route('edit');
       this.route('new');
     });
  });
});

export default Router;
