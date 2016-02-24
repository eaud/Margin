import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  content: DS.attr('string'),
  notebookid: DS.attr('number'),
  notebooks: DS.hasMany('notebook'),
  tags: DS.hasMany('tag')
});
