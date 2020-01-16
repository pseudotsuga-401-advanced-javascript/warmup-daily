'use strict';

// Arrays
let arrayOfNums = [1,2,3,4,5,6,7,8,9,10];

function forLoop(array){
  for(let number of array){
    console.log(number);
  }
}

function whileLoop(array){
  let count = 0;
  while(count < array.length){
    console.log(array[count]);
    count++;
  }
}

function mapSpoof(array, callback){
  let newArray = [];
  for(let i = 0; i <= array.length; i++){
    newArray[i] = callback(array[i]);
  }
  return newArray;
}

function filterSpoof(array, callback){
  let newArray = [];
  for(let i = 0; i <= array.length; i++){
    if(callback(array[i])) {newArray[newArray.length] = array[i]} 
  }
  return newArray;
}

function reduceSpoof(array, cb){
  let answer;
  for(let i = 0; i <= array.length; i++){
    answer += callback(array[i]);
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

let state = {};

let newPeople = [];
let newStuff = {};
let newState = {};

newPeople = ['Odie', ...people, 'Garfield'];
newStuff = {...stuff, cars: [...stuff.cars, 'Mitsubishi']};
state = {people: [...people], stuff: {...stuff}};
newState = {people: ['Odie',...state.people,'Garfield'], stuff: {...state.stuff, cars: [...state.stuff.cars, 'Honda']}};

console.log('new state', newState);
console.log('Originals', people, stuff, state);

// Done!