'use strict';

// Arrays

const arrayOfNumbers = [1,2,3,4,5,6,7,8,9,10];

function forLoop(array){
  for(let number of array){
    console.log(number);
  }
}

function whileLoop(array){
  let counter = 0;
  while(counter < array.length){
    console.log(array[counter]);
    counter++;
  }
}

