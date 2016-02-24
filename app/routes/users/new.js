import Ember from 'ember';
import UnauthenticatedRouteMixin from 'ember-simple-auth/mixins/unauthenticated-route-mixin';

export default Ember.Route.extend(UnauthenticatedRouteMixin,{
  model() {
    return this.store.createRecord('user');
  },
  actions: {
    addUser(){
      let user = this.modelFor(this.routeName);
      user.save().then((savedUser)=>{
        console.log('successful' + savedUser)
        this.transitionTo('login');
      }).catch((reason)=>{
      })
  }
},
renderTemplate: function() {
  this.render({
    into: 'application',
    outlet: 'login' });
},
});
