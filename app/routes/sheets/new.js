import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return this.store.createRecord('sheet')
  },
  actions: {
    save(){
      let model = this.modelFor(this.routeName);
      let notebook = this.modelFor('notebooks.notebook');
      // model.get('notebooks').addObject(notebook);
      model.set('notebookid', notebook.id);
      debugger;
      model.save().then((savedSheet)=> {
        this.transitionTo("sheets.sheet", savedSheet);
      }).catch((reason)=>{
      });
    }
  }
});
