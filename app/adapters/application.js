import ActiveModelAdapter from 'active-model-adapter';

export default ActiveModelAdapter.extend({
  namespace: 'api/v1',
  host: "http://margin-api.herokuapp.com/"
});
