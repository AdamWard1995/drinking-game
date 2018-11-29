import Ember from 'ember';

export default Ember.Controller.extend({
  level: 4,
  levels: [
    {name: 'Lightweight', value: 1},
    {name: 'Normal', value: 2},
    {name: 'Intense', value: 3},
    {name: 'Epic', value: 4}
  ],
  rules: Ember.computed('model', 'level', function() {
    const model = this.get('model');
    const level = this.get('level');
    if (level == 1) {
      return { oneDrink: model.oneDrink.slice(0, 5), twoDrinks: [], finishDrink: []};
    } else if (level == 2) {
      return { oneDrink: model.oneDrink.slice(0, 5), twoDrinks: model.twoDrinks.slice(0, 2), finishDrink: model.finishDrink.slice(0, 1)};
    } else if (level == 3) {
      return { oneDrink: model.oneDrink.slice(0, 7), twoDrinks: model.twoDrinks.slice(0, 2), finishDrink: model.finishDrink.slice(0, 2)};
    }
    return model;
  })
});
