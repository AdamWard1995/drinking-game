import Ember from 'ember';
import AllGames from 'drinking-game/models/all-games';

export default Ember.Route.extend({
  model: function() {
    return AllGames;
  }
});
