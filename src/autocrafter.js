let AutoCrafter = {
  recipes: require('./recipes.js'),
  upgrades: { 'crafting': 1, 'smelting': 2},
  setup: function(upgrades){
    this.upgrades = upgrades;
  },

  craft: function(itemName, quantity, results){
    if (results == undefined) results = {};
    let recipe = this.recipes.find(function(recipe){
      return (itemName in recipe.result);
    });
    if (!recipe){
      console.log("Recipe unknown for ", itemName);
    } else {

      let itemQuantity = quantity / recipe.result[itemName] * recipe.time / this.upgrades[recipe.method];
      for(let requirement in recipe.requirements){
        this.craft(requirement, recipe.requirements[requirement] * itemQuantity, results);
      }
      let key = Object.keys(recipe.result).join();
      if (!(key in results)) results[key] = 0;
      results[key] += itemQuantity;
    }

    return results;
  }
}

module.exports = AutoCrafter;
