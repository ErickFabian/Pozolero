import Ember from 'ember';
import Alertable from 'pozolero/mixins/alertable';
import UnauthenticatedRouteMixin from 'ember-simple-auth/mixins/unauthenticated-route-mixin';

export default Ember.Route.extend(
  UnauthenticatedRouteMixin,
  Alertable, {
});
