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


const letterPositions = function(sentence) {
    const results = {};
    // logic to update results here charArray
    let charArray = [];
    for (const iterator of sentence) {
        charArray.push(iterator)
    }

    for (let i = 0; i < charArray.length; i++) {
        let letterPositions = [];

        for (let j = 0; j < charArray.length; j++) {
            if (charArray[i] === charArray[j])
                letterPositions.push(j);
        }
        if (charArray[i] !== " ")
            results[charArray[i]] = letterPositions;
    }

    return results;
};


//const result1 = letterPositions("hello");
const result1 = letterPositions("lighthouse in the house");

// assertArraysEqual(eqArrays(result1["h"], [0]), true);
// assertArraysEqual(eqArrays(result1["e"], [1]), true);
// assertArraysEqual(eqArrays(result1["l"], [2, 3]), true);
// assertArraysEqual(eqArrays(result1["o"], [4]), true);

assertArraysEqual(eqArrays(result1["l"], [0]), true);
assertArraysEqual(eqArrays(result1["i"], [1, 11]), true);
assertArraysEqual(eqArrays(result1["g"], [2]), true);
assertArraysEqual(eqArrays(result1["h"], [3, 5, 15, 18]), true);
assertArraysEqual(eqArrays(result1["t"], [4, 14]), true);
assertArraysEqual(eqArrays(result1["o"], [6, 19]), true);
assertArraysEqual(eqArrays(result1["u"], [7, 20]), true);
assertArraysEqual(eqArrays(result1["s"], [8, 21]), true);
assertArraysEqual(eqArrays(result1["e"], [9, 16, 22]), true);
assertArraysEqual(eqArrays(result1["n"], [12]), true);