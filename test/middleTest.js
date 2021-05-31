const assertArraysEqual = require('../assertArraysEqual');
const eqArrays = require('../eqArrays');
const middle = require('../middle');



assertArraysEqual(eqArrays(middle([1, 2, 3, 4, 5]), middle([1, 2, 3, 4, 5])), true);
assertArraysEqual(eqArrays(middle([1, 2, 3, 4, 5]), middle([1, 2, 3, 4, 5, 6])), false);
assertArraysEqual(eqArrays(middle([1, 2]), middle([1, 2, 3, 4, 5])), false);
assertArraysEqual(eqArrays(middle([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]), middle([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])), true);
assertArraysEqual(eqArrays(middle([1, 2]), middle([1])), true);
assertArraysEqual(eqArrays(middle([]), middle([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])), false);