'use strict';

const arrayOfNums = [1,2,3,4,5,6,7,8,9,10];

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

function map(array, callback){
  let answer = [];
  for(let i = 0; i <= array.length; i++){
    answer[i] = callback(array[i]);
  }
  return answer;
}

function filter(array, callback){
  let answer = [];
  for(let i = 0; i <= array.length; i++){
    if(callback(array[i])){answer[answer.length] = array[i]}
  }
  return answer;
}

function reduce(array, callback){
  let answer;
  for(let i = 0; i <= array.length; i++){
    answer += callback(array[i]);
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