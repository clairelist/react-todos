//move element in one array into a new position in a new array

function swapper(array, idx, newIdx){
    let element = array[idx];

    const doNotMutate = [...array];
    console.log("element: " + element);
    //we MUST remove the index here we are moving to FIRST, or we will get repeat and weirdness!!!
    doNotMutate.splice(idx, 1);
    doNotMutate.splice(newIdx, 0, element);
    return doNotMutate;
}

// let testArray = ["first", "second", "third", "fourth", "fifth"];

// console.log("test array orig: " + testArray);

// console.log("after func is called 1: " + swapper(testArray, 1, 0));

// console.log("after func is called 2: " + swapper(testArray, 1, 3));

// console.log("after func is called test 3: " + swapper(testArray, 0, 3));

// console.log("test with five numbers 4: " + swapper(testArray, 2, 4));

// console.log("test with five numbers 5: " + swapper(testArray, 0, 4));

// console.log("mutated array? :" + testArray);

//NOW we need to take a function that recieves an array and returns the index number of whatever is clicked
//we will use this to pipeline our index number to the above arrayswapper function!!

function indexFinder(array, clickAction){
    
    const indexNo = array.findIndex((idx)=> idx === clickAction);

    if (indexNo === -1) {
        return "ERR!" //will have to do something else because sometimes our index will be out of bounds!!!
        //switch (clickAction); case clickAction > array.length
        //set to 0
        //case < array.length
        //set to array.length
        //will need to splice it there! 
    } else {
        return indexNo;
    }
}

const arrayToFind = ["title 1", "title 2", "title 3", "title 4"];

console.log(indexFinder(arrayToFind, "title 1"));
console.log(indexFinder(arrayToFind, "title 3"));
console.log(indexFinder(arrayToFind, "title 2"));
console.log(indexFinder(arrayToFind, "title 23"));