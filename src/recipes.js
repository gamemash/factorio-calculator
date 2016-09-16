module.exports = [
  {
    result: { 'copper plate': 1 },
    requirements: { 'copper ore': 1 },
    time: 3.5,
    method: 'smelting'
  },
  {
    result: { 'copper cable': 2},
    requirements: { 'copper plate': 1 },
    time: 0.5,
    method: 'crafting'
  },
  {
    result: { 'iron plate': 1 },
    requirements: { 'iron ore': 1 },
    time: 3.5,
    method: 'smelting'
  },
  {
    result: { 'iron gear wheel': 1},
    requirements: { 'iron plate': 2 },
    time: 0.5,
    method: 'crafting'
  },
  {
    result: { 'transport belt': 2},
    requirements: { 'iron plate': 1, 'iron gear wheel': 1 },
    time: 0.5,
    method: 'crafting'
  },
  {
    result: { 'electronic circuit': 1},
    requirements: { 'iron plate': 1, 'copper cable': 3 },
    time: 0.5,
    method: 'crafting'
  },
  {
    result: { 'science pack 1': 1},
    requirements: { 'iron gear wheel': 1, 'copper plate': 1 },
    time: 5,
    method: 'crafting'
  },
  {
    result: { 'inserter': 1},
    requirements: { 'iron gear wheel': 1, 'iron plate': 1, 'electronic circuit': 1 },
    time: 0.5,
    method: 'crafting'
  },
  {
    result: { 'science pack 2': 1},
    requirements: { 'inserter': 1, 'transport belt': 1},
    time: 6,
    method: 'crafting'
  },
  {
    result: { 'assembling machine 1': 1},
    requirements: { 'electronic circuit': 3, 'iron gear wheel': 5, 'iron plate': 9},
    time: 0.5,
    method: 'crafting'
  },
  {
    result: { 'assembling machine 2': 1},
    requirements: {'assembling machine 1': 1, 'electronic circuit': 3, 'iron gear wheel': 5, 'iron plate': 9},
    time: 0.5,
    method: 'crafting'
  },
  {
    result: { 'stone furnace': 1},
    requirements: {'stone': 5},
    time: 0.5,
    method: 'crafting'
  },
  {
    result: { 'steel furnace': 1},
    requirements: {'steel plate': 8, 'stone bricks': 10},
    time: 3,
    method: 'crafting'
  },
  {
    result: { 'steel plate': 1},
    requirements: {'iron plate': 5},
    time: 17.5,
    method: 'smelting'
  },
  {
    result: { 'stone brick': 1},
    requirements: {'stone': 2},
    time: 3.5,
    method: 'smelting'
  },
];
