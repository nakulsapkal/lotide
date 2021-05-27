const letterPositions = function(sentence) {
    const results = {};
    // logic to update results here


    let itemsSorted = [];
    let finalItem = [];

    for (const iterator of sentence) {
        itemsSorted.push(iterator)
    }

    //itemsSorted = itemsSorted.sort();

    for (let i = 0; i < itemsSorted.length; i++) {
        for (let j = 0; j < itemsSorted.length; j++) {
            if (itemsSorted[i] === itemsSorted[j])
                allcount += j;

        }
        finalItem.push(allCount);

    }
    console.log(finalItem);

    return results;
};


letterPositions("nakulsapkal");