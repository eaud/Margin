import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('notebooks');
  this.route('notebook', { path: 'notebooks/:notebook_id' });
  this.route('users');
  this.route('user', { path: 'users/:user_id' });
  this.route('tags');
  this.route('tag', { path: 'tags/:tag_id' });
  this.route('todoLists');
  this.route('todoList', { path: 'todoLists/:todoList_id' });
  this.route('todos');
  this.route('todo', { path: 'todos/:todo_id' });
  this.route('sheets');
  this.route('sheet', { path: 'sheets/:sheet_id' });
});

export default Router;
