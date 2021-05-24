const assertEqual = function(actual, expected) {
    if (actual === expected)
        console.log(`Assertion Passed: ${actual} === ${expected}`);
    else
        console.log(`Assertion Failed: ${actual} !== ${expected}`);
};

const tail = function(arr) {
    let tailArray = [];
    let j = 0;

    for (let i = 1; i < arr.length; i++) {
        tailArray[j] = arr[i];
        j++;
    }
    return tailArray;
};

// TEST CODE
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs");

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3);


const names = tail(["Yo Yo", "Lighthouse", "Labs"]);
assertEqual(names.length, 3);
assertEqual(names[0], "Lighthouse");
assertEqual(names[1], "Labs");
assertEqual(names[2], "Labs");


const random = tail([]);
assertEqual(random.length, 3);
assertEqual(random[0], "");
assertEqual(random[0], undefined);