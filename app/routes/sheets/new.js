import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return this.store.createRecord('sheet', {notebook: notebook})
  },
  actions: {
    save(){
      let model = this.modelFor(this.routeName);
      model.save().then((savedSheet)=> {
        this.transitionTo("sheets.sheet", savedSheet);
      }).catch((reason)=>{
      });
    }
  }
});
