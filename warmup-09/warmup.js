'use strict';

let arrayOfNums = [1,2,3,4,5,6,7,8,9,10];

function forLoop(array){
  for(let number of array){
    console.log(number);
  }
}

function whileLoop(array){
  let x = 0;
  while(x < array.length){
    console.log(array[x]);
    x++;
  }
}

function map(array, cb){
  let answer = [];
  for(let element in array){
    answer[element] = cb(array[element]);
  }
  return answer;
}

function filter(array, cb){
  let answer = [];
  for(let element in array){
    if(cb(array[element])){answer[answer.length] = array[element];}
  }
  return answer;
}

function reduce(array, cb){
  let answer;
  for(let element in array){
    cb(answer, array[element]);
  }
  return answer;
}

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