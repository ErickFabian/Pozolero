import ApplicationSerializer from 'pozolero/serializers/application';

export default ApplicationSerializer.extend({
  nestedAssociations: [
    'orderItems'
  ],

  attrs: {
    orderItems: {
      serialize: 'records'
    }
  }
});