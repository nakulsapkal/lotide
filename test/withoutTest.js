const assertArraysEqual = require('../assertArraysEqual');
const eqArrays = require('../eqArrays');
const without = require('../without');

assertArraysEqual(eqArrays(without([1], [1]), without([1], [1])), true);
assertArraysEqual(eqArrays(without([1, 2, 3], [1]), without([3, 2, 3], [1])), false);
assertArraysEqual(eqArrays(without([1, 2, 3], [1]), without([1, 2, 3, 1, 1], [1])), true);
assertArraysEqual(eqArrays(without(["hello", "world", "lighthouse"], ["world"]), without(["hello", "people", "lighthouse"], ["people"])), true);