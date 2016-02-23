import Ember from 'ember';

export default Ember.Component.extend({
  show: function() {
   this.$('.modal').modal();
   this.transitionTo('users')
 }.on('didInsertElement')
});
