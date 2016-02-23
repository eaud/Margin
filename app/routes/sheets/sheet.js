import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    return this.store.findRecord('sheet', params.sheet_id);
  },
  actions: {
    delete(){
      let resource = this.modelFor(this.routeName);
      resource.destroyRecord();
      this.transitionTo('sheets');
    }
  }
});
