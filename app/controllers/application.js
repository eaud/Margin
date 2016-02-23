import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),
  needs: 'sheets',
  actions: {
    logout(){
      this.get('session').invalidate();
    },

  },
});
