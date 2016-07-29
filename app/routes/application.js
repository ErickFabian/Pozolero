import Ember from 'ember';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';

const {
  Route
} = Ember;

export default Route.extend(ApplicationRouteMixin, {
  actions: {
    changeLayout(templateName) {
      this.render(templateName);
    }
  },

  sessionAuthenticated() {
    this.transition('main');
  }
});