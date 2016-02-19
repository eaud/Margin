import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

// Router.map(function() {
//   this.route('notebooks');
//   this.route('notebook', { path: 'notebooks/:notebook_id' });
//   this.route('users');
//   this.route('user', { path: 'users/:user_id' });
//   this.route('tags');
//   this.route('tag', { path: 'tags/:tag_id' });


//   this.route('todo', { path: 'todos/:todo_id' });
//   this.route('sheets');
//   this.route('sheet', { path: 'sheets/:sheet_id' });
// });

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
   this.route('notebook', {path: ':notebook_id'}, function(){
      this.route('sheets', { resetNamespace: true }, function(){
        this.route('sheet', {path: ':sheet_id'});
      });
   });
 });
});


export default Router;
