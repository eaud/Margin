import Ember from 'ember';

 export default Ember.Component.extend({
   isEditing: false,
   actions: {
     edit(){
       this.toggleProperty('isEditing');
     },
     submit(){
       this.toggleProperty('isEditing');
       this.attrs.saveChanges(this.get("notebook"));
     }
   },

 });
