import Ember from 'ember';

export default Ember.Component.extend({
  show: function() {
    debugger;
   this.$('.modal').modal('show');
 }.on('didInsertElement')
});
