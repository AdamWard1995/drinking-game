import Ember from 'ember';

export default Ember.Controller.extend({
  filter: '',
  movies: Ember.computed('model', function() {
    return this.get('model').filter(game => game.movie);
  }),
  filteredMovies: Ember.computed('movies', 'filter', function() {
    let movies = this.get('movies')
    if (this.get('filter')) {
      const tokens = this.get('filter').split(' ').map((t) => {return t.toLowerCase();});
      movies = movies.filter((movie) => {
        for (let tok of tokens) {
          if (!movie.get('title').toLowerCase().includes(tok)) {
            return false;
          }
        }
        return true;
      });
    }
    return movies.sortBy('slug');
  }),
  tvShows: Ember.computed('model', function() {
    return this.get('model').filter(game => game.tvShow);
  }),
  filteredTvShows: Ember.computed('tvShows', 'filter', function() {
    let tvShows = this.get('tvShows')
    if (this.get('filter')) {
      const tokens = this.get('filter').split(' ').map((t) => {return t.toLowerCase();})
      tvShows = tvShows.filter((show) => {
        for (let tok of tokens) {
          if (!show.get('title').toLowerCase().includes(tok)) {
            return false;
          }
        }
        return true;
      });
    }
    return tvShows.sortBy('slug');
  }),
  boardGames: Ember.computed('model', function() {
    return this.get('model').filter(game => game.boardGame);
  }),
  filteredBoardGames: Ember.computed('boardGames', 'filter', function() {
    let boardGames = this.get('boardGames')
    if (this.get('filter')) {
      const tokens = this.get('filter').split(' ').map((t) => {return t.toLowerCase();})
      boardGames = boardGames.filter((show) => {
        for (let tok of tokens) {
          if (!show.get('title').toLowerCase().includes(tok)) {
            return false;
          }
        }
        return true;
      });
    }
    return boardGames.sortBy('slug');
  }),
  videoGames: Ember.computed('model', function() {
    return this.get('model').filter(game => game.videoGame);
  }),
  filteredVideoGames: Ember.computed('model', 'filter', function() {
    let videoGames = this.get('videoGames')
    if (this.get('filter')) {
      const tokens = this.get('filter').split(' ').map((t) => {return t.toLowerCase();})
      videoGames = videoGames.filter((show) => {
        for (let tok of tokens) {
          if (!show.get('title').toLowerCase().includes(tok)) {
            return false;
          }
        }
        return true;
      });
    }
    return videoGames.sortBy('slug');
  })
});
