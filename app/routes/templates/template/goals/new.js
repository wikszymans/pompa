import Route from '@ember/routing/route';

export default Route.extend({
  controllerName: 'goals.new',
  renderTemplate: function(controller, model) {
    this.render('templates.template.goals.index');
    this.render('goals.new', {
      into: 'application',
      outlet: 'modal',
      model: model,
    });
  },
  model: function() {
    let template = this.modelFor('templates.template');
    return this.store.createRecord('goal', { template: template });
  },
});