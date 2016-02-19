import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    // let notebookId = this.paramsFor('notebooks.notebook');
    // return this.store.peekAll('sheet').filter(function(sheet) {console.log(sheet.get('notebooks.length')); return true})
    let notebook = this.modelFor('notebooks.notebook');
    return notebook.get('sheets')
  }
});
