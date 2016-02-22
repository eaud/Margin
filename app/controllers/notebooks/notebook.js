import Ember from 'ember';

 export default Ember.Controller.extend({
   actions: {
     update(notebook){
       notebook.save();
     }
   }
 });
