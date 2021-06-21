'use strict';

//selecting Elements
let score0El = document.querySelector('#score--0');
let score1El = document.getElementById('score--1'); // getElementById can only be used to call by id and where as query selector can be used for both class abd selector
let diceEl = document.querySelector('.dice');
//starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');
console.log(diceEl);
