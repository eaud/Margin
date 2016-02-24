import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    deleteSheet(sheet){
      this.attrs.deleteSheet(sheet)
    }
  }
});
