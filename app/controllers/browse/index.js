import Ember from 'ember';

export default Ember.Controller.extend({
  filter: '',
  movies: Ember.computed('model', 'filter', function() {
    let movies = this.get('model').movies
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
  tvShows: Ember.computed('model', 'filter', function() {
    let tvShows = this.get('model').tvShows
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
  })
});
