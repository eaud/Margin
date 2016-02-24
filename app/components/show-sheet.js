import Ember from 'ember';

export default Ember.Component.extend({
  isEditing: false,
  actions: {
    editSheet(){
      this.toggleProperty('isEditing');
    },
    saveSheet(sheet){
      this.attrs.updateSheet(sheet);
      this.toggleProperty('isEditing');
    },
    deleteSheet(sheet){
      this.attrs.deleteSheet(sheet)
    }
  }
});
