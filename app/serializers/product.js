import ApplicationSerializer from 'pozolero/serializers/application';

export default ApplicationSerializer.extend({
  attrs: {
    imageUrl: {
      serialize: false
    }
  }
});