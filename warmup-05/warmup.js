'use strict';
// Arrays

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
  }
}

function mapSpoof(array, callback){
  let newArr = [];
  for(let i = 0; i <= array.length; i++){
    newArr[i] = callback(array[i]);
  }
  return newArr;
}

function fakeFilter(array, callback){
  let newArr = [];
  for(let i = 0; i <= array.length; i++){
    if(!!callback(array[i])){newArr[newArr.length] = array[i];}
  }
  return newArr;
}

function fakeReduce(array, callback){
  let acc;
  for(let i = 0; i <= array.length; i++){
    acc += callback(array[i]);
  }
  return acc;
}

// Objects

const people = ['Kookla','Fran','Ollie'];

const stuff = {
  tv: 'huge',
  radio: 'old',
  toothbrush: 'frayed',
  cars: ['Toyota','Mazda']
}

let state = {people: [...people], stuf: {...stuff}};

let newPeople = ['Odie', ...people, 'Garfield'];
const newStuff = {...stuff, cars: [...stuff.cars, 'Ford']};
let newState = {people: ['Odie', ...people, 'Garfield'], stuff: {...stuff, cars: [...stuff.cars, 'Ford']}};

console.log('people', people);
console.log('stuff', stuff);
console.log('state', state);

// Done!
