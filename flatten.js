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




const flatten = function(nestedArray) {
    let flattenArray = [];
    for (let i = 0; i < nestedArray.length; i++) {
        if (typeof(nestedArray[i]) === 'object') {
            for (let j = 0; j < nestedArray[i].length; j++) {
                flattenArray.push(nestedArray[i][j]);
                console.log("Nested For: ", flattenArray);
            }
        } else {
            flattenArray.push(nestedArray[i]);
            console.log("Outer For: ", flattenArray);

        }
    }
    return flattenArray;
}

//console.log(flatten([1, 2, [3, 4], 5, [6]]));

//assertEqual(eqArrays(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4]), false);
//assertEqual(eqArrays([1, 2, 3, 4, 5, 6], flatten([1, 2, [3, 4], 5, [6]])), true); // => true
assertEqual(eqArrays(flatten([1, 2, [3, 4], 5, [6]]), flatten([1, 2, [3, 4], 5, [6]])), true); // => false
// assertEqual(eqArrays(flatten([0, ["1", "2", "3"], 5, [6]]), flatten([0, ["1", ["2", ["3"], 5],
//     [6]
// ]])), true); // => true
//assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // false
// assertEqual(eqArrays([
//     ["1", "2"],
//     ["3"]
// ], [
//     ["1", "2"],
//     ["3"]
// ]), true); // false