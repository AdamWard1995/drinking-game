import Ember from 'ember';
import RSVP from 'rsvp';
import { run } from '@ember/runloop';

export default Ember.Controller.extend({
  actions: {
    searchAsync(term) {
      const games = this.get('model').allGames;
      return new RSVP.Promise(function(resolve) {
        if (term.length === 0) {
          resolve([]);
        } else {
          run.later(function() {
            const tokens = term.split(' ').map((t) => {return t.toLowerCase();});
            resolve(games.filter((game) => {
              for (let tok of tokens) {
                if (!game.get('title').toLowerCase().includes(tok)) {
                  return false;
                }
              }
              return true;
            }));
          }, 600);
        }
      });
    },
    selectionHandler(game) {
      this.transitionToRoute('browse.game', game.get('slug'));
    }
  }
});
