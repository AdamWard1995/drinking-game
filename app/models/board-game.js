import EmberObject from '@ember/object';
import Ember from 'ember';

export default EmberObject.extend({
  boardGame: true,
  title: '',
  company: '',
  oneDrink: [],
  twoDrinks: [],
  finishDrink: [],
  displayName: Ember.computed('title', 'company', function() {
    return `${this.get('title')} (${this.get('company')})`;
  }),
  slug: Ember.computed('title', 'company', function() {
    return `${this.get('title')} ${this.get('company')}`.dasherize();
  })
});
