import EmberObject from '@ember/object';
import Ember from 'ember';

export default EmberObject.extend({
  partyGame: true,
  title: '',
  oneDrink: [],
  twoDrinks: [],
  finishDrink: [],
  displayName: Ember.computed('title', function() {
    return this.get('title');
  }),
  slug: Ember.computed('title', function() {
    return this.get('title').dasherize();
  })
});
