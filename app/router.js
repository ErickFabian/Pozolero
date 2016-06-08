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
    });

    this.route('products', function () {
      this.route('new');
      this.route('edit');
     });
  });

  this.route('auth', function () {
     this.route('sign-in');
     this.route('sign-up');
  });
});

export default Router;
