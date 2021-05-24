const assertEquals = function(actual, expected) {
    if (actual === expected)
        console.log(":-) Assertion Passed: " + actual + " === " + expected);
    else
        console.log("Assertion Failed: " + actual + " !== " + expected);
};


// TEST CODE
assertEquals("Lighthouse Labs", "Lighthouse Labs");
assertEquals(1, 0.1);