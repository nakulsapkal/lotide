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



const map = function(array, callback) {
    const results = [];
    for (const item of array) {
        results.push(callback(item))
    }
    return results;
}

const words = ["ground", "control", "to", "major", "tom"];

const results1 = map(words, word => word[0]);
const results2 = map(words, word => word[0]);

assertArraysEqual(eqArrays(results1, results2), true);
assertArraysEqual(eqArrays(map(["Light", "House", "Labs"], x => x[0]), map(["Light", "House", "Labs"], x => x[0])), true);
assertArraysEqual(eqArrays(map(["Light", "House", "Labs"], x => x[0]), map(["light", "house", "labs"], x => x[0])), false);
assertArraysEqual(eqArrays(map(["Light", "House", "Labs"], x => x[1]), map(["light", "house", "labs"], x => x[2])), false);