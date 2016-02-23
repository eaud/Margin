import Ember from 'ember';

 export default Ember.Controller.extend({
   actions: {
     updateSheet(sheet){
       sheet.save()
     }
   },
 });
