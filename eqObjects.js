const eqArrays = require('./eqArrays');

const eqObjects = function(object1, object2) {
  let keysObject1 = [];
  let valuesObject1 = [];
  let keysObject2 = [];
  let valuesObject2 = [];

  keysObject1 = Object.keys(object1);
  valuesObject1 = Object.values(object1);
  keysObject2 = Object.keys(object2);
  valuesObject2 = Object.values(object2);

  keysObject1 = keysObject1.sort();
  keysObject2 = keysObject2.sort();
  valuesObject1 = valuesObject1.sort();
  valuesObject2 = valuesObject2.sort();


  if (keysObject1.length !== keysObject2.length)
    return false;


  for (let i = 0; i < keysObject1.length; i++) {

    if ((Array.isArray(valuesObject1[i]) && Array.isArray(valuesObject2[i])) && (valuesObject1[i].length === valuesObject2[i].length)) {
      return eqArrays(valuesObject1[i], valuesObject2[i]);

    } else {
      if ((keysObject1[i] !== keysObject2[i]) || (valuesObject1[i] !== valuesObject2[i])) {
        return false;
      }

    }
  }

  return true;
};

module.exports = eqObjects;