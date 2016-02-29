import Ember from 'ember';

export default Ember.Controller.extend({
  sheetsShowing: false,
  actions: {
    showSheets(){
      this.toggleProperty('sheetsShowing')
    }
  }
});
