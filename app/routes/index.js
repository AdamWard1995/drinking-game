import Ember from 'ember';
import AllGames from 'drinking-game/models/all-games';

export default Ember.Route.extend({
  model: function() {
    const numGames = AllGames.length;
    return {
      allGames: AllGames,
      newGames: AllGames.slice(numGames - 12, numGames)
    };
  }
});
