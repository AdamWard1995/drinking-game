import EmberObject from '@ember/object';
import Ember from 'ember';

export default EmberObject.extend({
  tvShow: true,
  title: '',
  season: '',
  oneDrink: [],
  twoDrinks: [],
  finishDrink: [],
  displayName: Ember.computed('title', 'season', function() {
    return `${this.get('title')} (Season ${this.get('season')})`;
  }),
  slug: Ember.computed('title', 'season', function() {
    return `${this.get('title')} ${this.get('season')}`.dasherize();
  })
});
