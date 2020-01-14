'use strict';

const arrayOfNums = [1,2,3,4,5,6,7,8,9,10];

const forLoop = (array) => {
  for(let number of array){
    console.log(number);
  }
}

const whileLoop = (array) => {
  let x = 0;
  while(x < array.length){
    console.log(array[x]);
    x++;
  }
}

const mapSpoof = (array, callback) => {
  let ansArray = [];
  for(let i = 0; i <= array.length; i++){
    ansArray[i] = callback(array[i]);
  }
  return ansArray;
}

const filterSpoof = (array, callback) => {
  let ansArray = [];
  for(let i = 0; i <= array.length; i++){
    if(callback(array[i])) {ansArray[ansArray.length] = array[i];} 
  }
  return ansArray;
}

const reduceSpoof = (array, callback) => {
  let answer;
  for(let i = 0; i <= array.length; i++){
    answer += callback(array[i]);
  }
  return answer;
}

// Starter Code
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
// End starter code

newPeople = ['Odie', ...people, 'Garfield'];
newStuff = {...stuff, cars: [...stuff.cars, 'Honda']};
state = {...people, ...stuff};
newState = {people: ['Odie', ...people, 'Garfield'], stuff: {...stuff, cars: [...stuff.cars, 'Honda']}};

console.log(people);
console.log(stuff);
console.log(state);