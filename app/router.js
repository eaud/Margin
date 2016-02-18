import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('notebooks', function() {
    this.route('notebook', {path: "/:notebook_id"}, function() {
      this.route('sheets', function() {
        this.route('sheet',{path: "/:sheet_id"});
      });
    });
  });
  this.route('users');
  this.route('tags');
  this.route('todoLists');
  this.route('todos');
});

export default Router;
