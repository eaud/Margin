import Ember from 'ember';

 export default Ember.Route.extend({
   model(){
     return this.store.createRecord('notebook');
   },
   actions: {
     save(){
       let model = this.modelFor(this.routeName);
       model.save().then(()=> {
         this.transitionTo("notebooks");
       });
     }
   }
 });
