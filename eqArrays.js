const assertEqual = function(actual, expected) {
    if (actual === expected)
        console.log(`Assertion Passed: ${actual} === ${expected}`);
    else
        console.log(`Assertion Failed: ${actual} !== ${expected}`);
};


const eqArrays = function(arrList1, arrList2) {
    let assertResult = true;
    for (let i = 0; i < arrList1.length; i++) {
        if (arrList1[i] !== arrList2[i])
            assertResult = false;
    }
    return assertResult;
}


assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => true
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // => false
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => true
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // false
assertEqual(eqArrays([
    ["1", "2"],
    ["3"]
], [
    ["1", "2"],
    ["3"]
]), true); // false