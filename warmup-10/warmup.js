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

function map(array, cb){
  let answer = [];
  for(let index in array){
    answer[index] = cb(array[index]); 
  }
  return answer;
}

function filter(array, cb){
  let answer = [];
  for(let index in array){
    if(cb(array[index])){
      answer[answer.length] = array[index];
    }
  }
  return answer;
}

function reduce(array, cb, answer){
  for(let index in array){
    answer = cb(answer, arr[index]);
  }
  return answer;
}

// Objects

const people = ['Kookla','Fran','Ollie'];

const stuff = {
  tv: 'huge',
  radio: 'old',
  toothbrush: 'frayed',
  cars: ['Toyota','Mazda']
}

let state = {people: [...people], stuff: {...stuff}};

let newPeople = ['Odie', ...people, 'Garfield'];
const newStuff = {...stuff, cars: [...stuff.cars, 'Mitsubishi']};
let newState = {people: ['Odie', ...state.people, 'Garfield'], stuff: {...state.stuff, cars: [...state.stuff.cars, 'Mitsubishi']}};

console.log(people, stuff, state);