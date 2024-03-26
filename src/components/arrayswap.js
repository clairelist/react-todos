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

let testArray = ["first", "second", "third", "fourth", "fifth"];

console.log("test array orig: " + testArray);

console.log("after func is called 1: " + swapper(testArray, 1, 0));

console.log("after func is called 2: " + swapper(testArray, 1, 3));

console.log("after func is called test 3: " + swapper(testArray, 0, 3));

console.log("test with five numbers 4: " + swapper(testArray, 2, 4));

console.log("test with five numbers 5: " + swapper(testArray, 0, 4));

console.log("mutated array? :" + testArray);


// function insertElement() {
//     let arr = [1, 2, 3, 4, 5];
//     let index = 2;
//     let element = -99;
//  console.log(arr);
//  arr.splice(index, 1);
//     arr.splice(index, 0, element);
//     //arr.splice(index, 1);
     
//     console.log(arr);
// }

