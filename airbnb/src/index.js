import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import App from './App';

// const nums = [1, 2, 3, 4, 5];

// const squared = nums.map(function (item) {
//   return item * item;
// })

// console.log(squared)

// **********************

// ***return array of capitalized first letters
// const names = ["alice", "bob", "charlie", "danielle"]

// const firstLetters = names.map(function (name) {

//   return name.charAt(0).toUpperCase() + name.slice(1);
// })

// console.log(firstLetters);

// **********************

// ***add paragraph tags to strings
// const pokemon = ["Bulbasaur", "Charmander", "Squirtle"]

// const paragraphs = pokemon.map((monster) => `<p>${monster}</p>`);

// console.log(paragraphs);

// **********************

ReactDOM.render(<App />, document.getElementById("root"));