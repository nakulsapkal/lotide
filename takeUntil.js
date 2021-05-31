// Lodash's example code for takeWhile shows us that instead of just supporting callback functions, it can support "iteratee shorthand" using objects and arrays. We can safely ignore these examples since our function will be simpler and not need to support this.

// The function will return a "slice of the array with elements taken from the beginning." It should keep going until the callback/predicate returns a truthy value.

// To keep things simple, the callback should only be provided one value: The item in the array.

// Implement takeUntil which will keep collecting items from a provided array until the callback provided returns a truthy value.

const takeUntil = function(array, callback) {

  let result = [];
  // for (let i = 0; i < array.length; i++) {
  //     if (callback(array[i]) === false)
  //         result.push(array[i]);
  //     else
  //         return result;
  // }


  for (const item of array) {
    if (callback(item))
      return result;
    else
      result.push(item);
  }
  return result;
}


module.exports = takeUntil;