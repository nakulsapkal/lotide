const assertArraysEqual = require('../assertArraysEqual');
const eqArrays = require('../eqArrays');
const letterPositions = require('../letterPositions');

const result = letterPositions("lighthouse in the house");

assertArraysEqual(eqArrays(result["l"], [0]), true);
assertArraysEqual(eqArrays(result["i"], [1, 11]), true);
assertArraysEqual(eqArrays(result["g"], [2]), true);
assertArraysEqual(eqArrays(result["h"], [3, 5, 15, 18]), true);
assertArraysEqual(eqArrays(result["t"], [4, 14]), true);
assertArraysEqual(eqArrays(result["o"], [6, 19]), true);
assertArraysEqual(eqArrays(result["u"], [7, 20]), true);
assertArraysEqual(eqArrays(result["s"], [8, 21]), true);
assertArraysEqual(eqArrays(result["e"], [9, 16, 22]), true);
assertArraysEqual(eqArrays(result["n"], [12]), true);
//assertArraysEqual(eqArrays(result[" "], [10, 13, 17]), true); //need to fix this case in either letterPosition js file or eqArrays file