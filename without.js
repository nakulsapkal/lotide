const eqArrays = function(arrList1, arrList2) {
    let assertResult = true;

    if (arrList1 === undefined || arrList2 === undefined || arrList1.length !== arrList2.length)
        return false;

    for (let i = 0; i < arrList1.length; i++) {
        if (arrList1[i] !== arrList2[i])
            assertResult = false;
    }
    return assertResult;
}


const assertArraysEqual = function(actual, expected) {
    if (actual === expected)
        console.log("Assertion Passed: ", actual, " === ", expected);
    else
        console.log("Assertion Failed: ", actual, " !== ", expected);
}





const without = function(sourceArray, itemToRemove) {
    let outputArray = [];

    for (let i = 0; i < sourceArray.length; i++) {
        let isSame = true;
        let j = 0;
        while (j != itemToRemove.length) {
            if (sourceArray[i] === itemToRemove[j])
                isSame = false;
            j++;
        }
        if (isSame)
            outputArray.push(sourceArray[i]);
    }
    return outputArray;
}


assertArraysEqual(eqArrays(without([1], [1]), without([1], [1])), true);
assertArraysEqual(eqArrays(without([1, 2, 3], [1]), without([3, 2, 3], [1])), false);
assertArraysEqual(eqArrays(without([1, 2, 3], [1]), without([1, 2, 3, 1, 1], [1])), true);
assertArraysEqual(eqArrays(without(["hello", "world", "lighthouse"], ["world"]), without(["hello", "people", "lighthouse"], ["people"])), true);