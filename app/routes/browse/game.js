import Ember from 'ember';

export default Ember.Route.extend({
  model (params) {
    const games = this.modelFor('browse');
    return games.movies.findBy('slug', params.game) || games.tvShows.findBy('slug', params.game) ||
           games.boardGames.findBy('slug', params.game) || games.videoGames.findBy('slug', params.game);
  }
});
