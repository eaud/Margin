import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  description: DS.attr('text'),
  aasmState: DS.attr('string'),
  dueDate: DS.attr('datetime'),
  todoList: DS.belongsTo('todo-list'),
  sheet: DS.belongsTo('sheet')
});
