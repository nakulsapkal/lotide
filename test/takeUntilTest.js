const assertArraysEqual = require('../assertArraysEqual');
const eqArrays = require('../eqArrays');
const takeUntil = require('../takeUntil');


const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');

assertArraysEqual(eqArrays(results1, results2), true);
assertArraysEqual(eqArrays(takeUntil(["Light", "House", "Labs"], x => x === 'House'), takeUntil(["Light", "House", "Labs"], x => x === 'House')), true);
assertArraysEqual(eqArrays(takeUntil(["Light", "House", "Labs"], x => x === 'Labs'), takeUntil(["Light", "House", "Labs"], x => x === 'Labs')), true);
assertArraysEqual(eqArrays(takeUntil([1, 2, 3, 4, 5], x => x === 4), takeUntil([1, 2, 3, 4, 5], x => x === 3)), false);

// [ 1, 2, 5, 7, 2 ]
// ---
// [ 'I\'ve', 'been', 'to', 'Hollywood' ]