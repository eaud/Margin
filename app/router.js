import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('todoLists', function(){
    this.route('todoList', {path: ':todoList_id'}, function(){
      this.route('todos', {resetNamespace: true}, function(){
        this.route('todo', {path: ':todo_id'});
        this.route('new');
      });
    });

  });
 this.route('notebooks', function() {
   this.route('notebook', {path: ':notebook_id'})
   });
 this.route('sheets', { resetNamespace: true }, function(){
   this.route('sheet', {path: ':sheet_id'});
 });
  this.route('login');
  this.route('users', function(){
    this.route('new');
  });

});


export default Router;
