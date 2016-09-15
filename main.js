"use strict";

let AutoCrafter = require('./src/autocrafter.js');

let upgrades = {
  'crafting': 1,
  'smelting': 1
}

let items = {
  'transport belt': 'Basic-transport-belt.png',
  'copper cable': 'Copper-cable.png',
  'copper plate': 'Copper-plate.png',
  'electronic circuit': 'Electronic-circuit.png',
  'inserter': 'Inserter-icon.png',
  'iron gear wheel': 'Iron-gear-wheel.png',
  'iron plate': 'Iron-plate.png',
  'science pack 2': 'Science-pack-2.png',
  'science pack 1': 'Science-pack-1.png'
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
    document.getElementById('itemIcon').src = "./images/" + items[this.item];
  },
  submit: function(data){
    console.log("handle");
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
