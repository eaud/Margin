import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  description: DS.attr('string'),
  aasmState: DS.attr('string'),
  dueDate: DS.attr('date'),
  todoList: DS.belongsTo('todo-list'),
  sheet: DS.belongsTo('sheet')
});
