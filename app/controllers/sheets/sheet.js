import Ember from 'ember';

 export default Ember.Controller.extend({
   actions: {
     updateSheet(sheet){
       sheet.save()
     },
     delete(sheet){
       sheet.destroyRecord();
       this.transitionTo('sheets');
     }
   },
 });
