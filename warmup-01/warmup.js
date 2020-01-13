'use strict';

// Array Stuff
const arrayOfNums = [1,2,3,4,5,6,7,8,9,10];

function forLoop(array){
  for(let number of array){
    console.log(number);
  }
}


function whileLoop (array){
  let x = 0;
  while(x < array.length){
    console.log(array[x]);
    x++;
  }
}

function map (array, callback){
  let newArray = [];
  for(let i = 0; i <= array.length; i++){
    newArray[i] = callback(array[i]);
  }
  return newArray;
}

function filter (array, callback){
  let newArray = [];
  for(let i = 0; i <= array.length; i++){
    if (callback(array[i]) === true){
      newArray[newArray.length] = array[i];
    }
  }
  return newArray;
}

function reduce(array, callback){
  let answer;
  for(let i = 0; i <= array.length; i++){
    answer = callback(array[i]);
  }
  return answer; 
}

// Object Stuff

const people = ['Kookla','Fran','Ollie'];

const stuff = {
  tv: 'huge',
  radio: 'old',
  toothbrush: 'frayed',
  cars: ['Toyota','Mazda']
}

let state = {};

let newPeople = [];
const newStuff = {};
let newState = {};

['Odie', ...people, 'Garfield'] = newPeople;
{tv, radio, toothbrush, [cars, 'New Car']} = newStuff;