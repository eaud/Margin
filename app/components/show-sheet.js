import Ember from 'ember';
import autosave from 'ember-autosave';

// const { inject } = Ember;


export default Ember.Component.extend({
  store: Ember.inject.service(),
  sheetProxy: autosave('sheet', {
    save(sheet) {
      debugger;
      sheet.save();
    }
  })

});
