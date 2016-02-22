import Ember from 'ember';

 export default Ember.Route.extend({
   model(){
     // /lists/7/todos/new
    //  let list = this.modelFor('lists.list');
     return this.store.createRecord('todo', {list: list});
   },
   actions: {
     save(){
       let model = this.modelFor(this.routeName);
       model.save().then(()=> {
         this.transitionTo("todos");
       });
     }
   }
 });
