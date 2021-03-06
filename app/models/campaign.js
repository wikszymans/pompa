import { computed } from '@ember/object';
import DS from 'ember-data';
import Moment from 'moment';

export default DS.Model.extend({
  name: DS.attr('string'),
  description: DS.attr('string'),
  state: DS.attr('string'),
  startDate: DS.attr('date'),
  startedDate: DS.attr('date'),
  finishDate: DS.attr('date'),
  finishedDate: DS.attr('date'),
  scenarios: DS.hasMany('scenario', { async: true }),
  startedDateString: computed('startedDate', function() {
    if (this.startedDate) {
      return String(Moment(this.startedDate).calendar());
    } else {
      return null;
    }
  }),
  finishedDateString: computed('finishedDate', function() {
    if (this.finishedDate) {
      return String(Moment(this.finishedDate).calendar());
    } else {
      return null;
    }
  }),
  start: function() {
    let modelName = this.constructor.modelName;
    let adapter = this.store.adapterFor(modelName);
    return adapter.start(this.id);
  },
  finish: function() {
    let modelName = this.constructor.modelName;
    let adapter = this.store.adapterFor(modelName);
    return adapter.finish(this.id);
  },
  pause: function() {
    let modelName = this.constructor.modelName;
    let adapter = this.store.adapterFor(modelName);
    return adapter.pause(this.id);
  },
  synchronizeEvents: function() {
    let modelName = this.constructor.modelName;
    let adapter = this.store.adapterFor(modelName);
    return adapter.synchronizeEvents(this.id);
  },
});
