'use strict';

const arrayOfNumbers = [1,2,3,4,5,6,7,8,9,10];

function forLoop(array){
  for(let number of array){
    console.log(number);
  }
}

function whileLoop(array){
  let i = 0;
  while(i < array.length){
    console.log(array[i]);
    i++;
  }
}