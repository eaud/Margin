import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return this.store.createRecord('sheet');
  },
  actions: {
    save(){
      let model = this.modelFor(this.routeName);
      let notebook = this.modelFor('notebooks.notebook');
      model.set('notebookid', notebook.id);
      model.save().then((savedSheet)=> {
        this.transitionTo("sheets.sheet", savedSheet);
      }).catch((reason)=>{
      });
    }
  },
  renderTemplate: function() {
    this.render({
      into: 'notebooks',
      outlet: 'new' });
  }

});
