import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin'
export default Ember.Route.extend(AuthenticatedRouteMixin,{
  model: function() {
        return this.store.findAll('notebook');
  },
  actions: {
    goToSheets(notebook){
      this.transitionTo('sheets', notebook)
    }
  },
  renderTemplate: function() {
    this.render({ outlet: 'sidebar' });
  }
});
