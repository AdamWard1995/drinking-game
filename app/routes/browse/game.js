import Ember from 'ember';

export default Ember.Route.extend({
  model (params) {
    const games = this.modelFor('browse');
    return games.findBy('slug', params.game);
  }
});
