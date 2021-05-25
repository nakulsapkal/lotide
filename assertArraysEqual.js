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


assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [1, 2, 3]); // => true
assertArraysEqual([1, 2, 3], [3, 2, 1]); // => false
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // => true
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); // false
assertArraysEqual([
    ["1", "2"],
    ["3"]
], [
    ["1", "2"],
    ["3"]
]); // false