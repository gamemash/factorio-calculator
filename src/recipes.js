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
];
