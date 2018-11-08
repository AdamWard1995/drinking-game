import EmberObject from '@ember/object';
import Ember from 'ember';

export default EmberObject.extend({
  movie: true,
  title: '',
  year: '',
  oneDrink: [],
  twoDrinks: [],
  finishDrink: [],
  displayName: Ember.computed('title', 'year', function() {
    return `${this.get('title')} (${this.get('year')})`;
  }),
  slug: Ember.computed('displayName', function() {
    return this.get('displayName').dasherize();
  })
});