// Lodash's example code for takeWhile shows us that instead of just supporting callback functions, it can support "iteratee shorthand" using objects and arrays. We can safely ignore these examples since our function will be simpler and not need to support this.

// The function will return a "slice of the array with elements taken from the beginning." It should keep going until the callback/predicate returns a truthy value.

// To keep things simple, the callback should only be provided one value: The item in the array.

// Implement takeUntil which will keep collecting items from a provided array until the callback provided returns a truthy value.



const eqArrays = function(arrList1, arrList2) {
    let assertResult = true;
    for (let i = 0; i < arrList1.length; i++) {
        if (arrList1[i] !== arrList2[i])
            assertResult = false;
    }
    return assertResult;
}


const assertArraysEqual = function(arrayList1, arrayList2) {
    if (eqArrays(arrayList1, arrayList2))
        console.log("Assertion Passed: ", arrayList1, " === ", arrayList2);
    else
        console.log("Assertion Failed: ", arrayList1, " !== ", arrayList2);
}


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