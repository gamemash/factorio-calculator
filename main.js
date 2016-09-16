"use strict";

let AutoCrafter = require('./src/autocrafter.js');
let Recipes = require('./src/recipes.js');

let upgrades = {
  'crafting': 1,
  'smelting': 1
}

let items = {
  'assembling machine 1': 'Assembling-machine-1.png',
  'assembling machine 2': 'Assembling-machine-2.png',
  'assembling machine 3': 'Assembling-machine-3.png',
  'transport belt': 'Basic-transport-belt.png',
  'copper cable': 'Copper-cable.png',
  'copper plate': 'Copper-plate.png',
  'electronic circuit': 'Electronic-circuit.png',
  'inserter': 'Inserter-icon.png',
  'iron gear wheel': 'Iron-gear-wheel.png',
  'iron plate': 'Iron-plate.png',
  'science pack 2': 'Science-pack-2.png',
  'science pack 1': 'Science-pack-1.png',
  'steel furnace': 'Steel-furnace.png',
  'stone furnace': 'Stone-furnace.png',
  'electric furnace': 'Electric-furnace.png',
  'stone': 'Stone.png',
  'stone brick': 'Stone-brick.png',
  'steel plate': 'Steel-plate.png'
};

AutoCrafter.setup(upgrades);

let FactoryForm = {
  item: items[0],
  form: document.getElementById('factoryFormForm'),
  resultsList: document.getElementById('results'),
  setItem: function(item){
    this.item = item;
    this.updateIcon();
  },
  updateIcon: function(){
    let recipeSpan = document.getElementById("recipeSpan");
    while(recipeSpan.firstChild)
      recipeSpan.removeChild(recipeSpan.firstChild);

    let recipe = Recipes.find(function(recipe){
      return (this.item in recipe.result);
    }.bind(this));
    if (recipe){
      let newIcon = function(item){
        let icon = document.createElement("img");
        icon.src = "./images/" + items[item];
        return icon;
      }
      for (let requirement in recipe.requirements){
        if(requirement in items)
          recipeSpan.appendChild(newIcon(requirement));
      }

      { 
        let seperator = document.createElement("span");
        var el = document.createElement("div");
        el.innerHTML = "&#8594;";
        seperator.textContent = el.firstChild.data;
        recipeSpan.appendChild(seperator);
      }

      for (let result in recipe.result){
        if(result in items)
          recipeSpan.appendChild(newIcon(result));
      }
    }
  },
  submit: function(data){
    let smeltingSpeed = parseFloat(Array.prototype.slice.call(document.getElementsByName("smelting")).find(function(input){ return input.checked }).value);
    let craftingSpeed = parseFloat(Array.prototype.slice.call(document.getElementsByName("crafting")).find(function(input){ return input.checked }).value);

    let upgrades = {
      'smelting': smeltingSpeed,
      'crafting': craftingSpeed
    };
    AutoCrafter.setup(upgrades);

    let quantity = parseFloat(document.getElementById('quantity').value);
    console.log('calculate ', this.item, ' for ', quantity);
    let result = AutoCrafter.craft(this.item, quantity);
    this.parseResults(result);
  },
  clearResults: function(){
    while(this.resultsList.firstChild)
      this.resultsList.removeChild(this.resultsList.firstChild);
  },
  parseResults: function(result){
    this.clearResults();
    for(let item in result){
      let li = document.createElement("li");
      let img = document.createElement("img");
      let span = document.createElement("span");
      span.innerHTML = result[item];
      img.src = "images/" + items[item];
      li.appendChild(img);
      li.appendChild(span);
      this.resultsList.appendChild(li);
    }
  }
};

let recipeContainer = document.getElementById("recipes");
for(let item in items){
  let url = items[item];
  let btn = document.createElement("button");
  let img = document.createElement("img");
  img.src = "images/" + url;
  btn.appendChild(img);
  btn.addEventListener('click', function(){
    FactoryForm.setItem(item)
  }, false);
  recipeContainer.appendChild(btn);
}

FactoryForm.setItem('transport belt');
FactoryForm.submit();

FactoryForm.form.onsubmit = function(data){
  FactoryForm.submit(data);
  return false;
}
