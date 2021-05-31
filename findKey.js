// Lodash's example code for findKey shows us that instead of just supporting callback functions, it can support "iteratee shorthand" using objects and arrays. We can safely ignore these examples since our function will be simpler and not need to support this.

//Implement the function findKey which takes in an object and a callback. It should scan the object and return the first key for which the callback returns a truthy value. If no key is found, then it should return undefined.

const findKeyOfInnerObject = (x, y) => { if (y(x)) return true; };


const findKey = function(object, callback) {
  for (const key1 in object) {
    if (object.hasOwnProperty.call(object, key1)) {
      if (typeof object[key1] === 'object') {
        if (findKeyOfInnerObject(object[key1], callback))
          return key1;
      } else {
        if (callback(object[key1]))
          return key1;
      }
    }

  }
}


module.exports = findKey;