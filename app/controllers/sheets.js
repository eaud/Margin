import Ember from 'ember';
import {AutoSaveProxy} from 'ember-autosave';

export default Ember.Controller.extend({

  applicationController: Ember.inject.controller('application'),

  actions: {
  showSheet: function(item){
    this.get("applicationController").set('currentSheet', item);
    // this.set('currentSheet', item);
    }
  }
});
