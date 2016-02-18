import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  namespace: 'v1',
  host: 'localhost:3000'
});
