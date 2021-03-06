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

function map(array, callback){
  let newArray = [];
  for(let i = 0; i <= array.length; i++){
    newArray[i] = callback(array[i]);
  }
  return newArray;
}

function filter (array, callback){
  let newArray = [];
  for(let i = 0; i <= array.length; i++){
    if(callback(array[i])){newArray[newArray.length] = array[i];}
  }
  return newArray;
}

function reduce (array, callback){
  let answer;
  for(let i = 0; i <= array.length; i++){
    answer = callback(array[i]);
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

let state = {people: [...people], stuff: {...stuff}};

let newPeople = ['Odie', ...people, 'Garfield'];
const newStuff = {...stuff, cars: [...stuff.cars, 'Automobile']};
let newState = {people: ['Odie', ...state.people, 'Garfield'], stuff: {...state.stuff, cars: [...state.stuff.cars, 'Automobile']}};

console.log(people, stuff, state);