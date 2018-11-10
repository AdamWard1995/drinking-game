import Ember from 'ember';
import AllGames from 'drinking-game/models/all-games';

export default Ember.Route.extend({
  model: function() {
    const numMovies = AllGames.movies.length;
    const numTvShows = AllGames.tvShows.length;
    return {
      allGames: [].concat(AllGames.movies).concat(AllGames.tvShows).concat(AllGames.boardGames),
      newMovies: AllGames.movies.slice(numMovies - 3, numMovies),
      newTvShows: AllGames.tvShows.slice(numTvShows - 3, numTvShows)
    };
  }
});
