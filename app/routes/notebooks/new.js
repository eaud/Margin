import Ember from 'ember';

 export default Ember.Route.extend({
   model(){
     return this.store.createRecord('notebook');
   },
   actions: {
     save(){
       let model = this.modelFor(this.routeName);
       model.save().then((savedNotebook)=> {
         this.transitionTo("notebooks.notebook.sheets", savedNotebook);
       }).catch((reason)=>{
       });
     }
   },
   renderTemplate: function() {
     this.render({ outlet: 'newnotebook' });
   }
 });
