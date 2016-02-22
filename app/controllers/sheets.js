import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
  showSheet: function(item){
    this.set('currentSheet', item);
    }
  }
});
