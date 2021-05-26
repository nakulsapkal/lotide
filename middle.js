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


const assertArraysEqual = function(outcome, expected) {
    if (outcome === expected)
        console.log("Assertion Passed: ", outcome, " === ", expected);
    else
        console.log("Assertion Failed: ", outcome, " !== ", expected);
}


const middle = function(sourceArr) {
    const arrayLength = sourceArr.length;
    const middleOfArray = [];
    if (arrayLength === 0 || arrayLength === 1 || arrayLength === 2)
        return middleOfArray;

    if ((sourceArr.length % 2) !== 0)
        middleOfArray.push(sourceArr[Math.ceil((arrayLength / 2) - 1)]);
    else {
        middleOfArray.push(sourceArr[(arrayLength / 2) - 1]);
        middleOfArray.push(sourceArr[arrayLength / 2]);
    }
    return middleOfArray;
}



assertArraysEqual(eqArrays(middle([1, 2, 3, 4, 5]), middle([1, 2, 3, 4, 5])), true);
assertArraysEqual(eqArrays(middle([1, 2, 3, 4, 5]), middle([1, 2, 3, 4, 5, 6])), false);
assertArraysEqual(eqArrays(middle([1, 2]), middle([1, 2, 3, 4, 5])), false);
assertArraysEqual(eqArrays(middle([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]), middle([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])), true);
assertArraysEqual(eqArrays(middle([1, 2]), middle([1])), true);
assertArraysEqual(eqArrays(middle([], [1, 2, 3, 4, 5, 6, 7, 8, 9, 0])), false);


// console.log(middle([1, 2, 3, 4, 5]));
// console.log(middle([1, 2, 3, 4, 5, 6]));
// console.log(middle([1, 2]));
// console.log(middle([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
// console.log(middle([1]));
// console.log(middle([]));