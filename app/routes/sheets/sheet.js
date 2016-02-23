import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin'
export default Ember.Route.extend(AuthenticatedRouteMixin,{
  model(params){
    return this.store.findRecord('sheet', params.sheet_id);
  },
  actions: {
    updateSheet(sheet){
      sheet.save()
    }
  },
  renderTemplate: function() {
    this.render({
      into: 'application',
      outlet: 'editor' });
  },

});
