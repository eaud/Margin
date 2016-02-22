import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin'
export default Ember.Route.extend(ApplicationRouteMixin,{
  model: function() {
    // let notebookId = this.paramsFor('notebooks.notebook');
    // return this.store.peekAll('sheet').filter(function(sheet) {console.log(sheet.get('notebooks.length')); return true})
    let notebook = this.modelFor('notebooks.notebook');
    return notebook.get('sheets')
  }
});
