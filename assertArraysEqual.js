const eqArrays = require('./eqArrays');

const assertArraysEqual = function(arrayList1, arrayList2) {
  if (eqArrays(arrayList1, arrayList2))
    console.log("Assertion Passed: ", arrayList1, " === ", arrayList2);
  else
    console.log("Assertion Failed: ", arrayList1, " !== ", arrayList2);
}


module.exports = assertArraysEqual;