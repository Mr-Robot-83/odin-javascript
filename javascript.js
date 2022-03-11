// Exercise one
let message = 'Hello world'; 

//Exercise two, can also declare variables first and assign values second. e.g. let name, admin; name = x; etc.
let name = "John";
let admin = name;

// Exercise three https://javascript.info/task/declare-variables

let ourPlanetName = "Earth";
let currentVisitorName = "John";


// alert (admin); // shows the variable content


// Exercises from w3 schools https://www.w3schools.com/js/js_arithmetic.asp

//modulus operator (returns remainder)
let x = 28;
let y = 13;
let z = x % y;

const myInt = 5;
const myFloat = 6.667;
myInt;
myFloat;

typeof myInt;
typeof myFloat;

console.log(typeof myInt + " " + typeof myFloat)

const lotsOfDecimal = 1.766584958675746364;
lotsOfDecimal;
const twoDecimalPlaces = lotsOfDecimal.toFixed(2);
twoDecimalPlaces;

const btn = document.querySelector('button');
const txt = document.querySelector('p');

btn.addEventListener('click', updateBtn);

function updateBtn() {
  if (btn.textContent === 'Start machine') {
    btn.textContent = 'Stop machine';
    txt.textContent = 'The machine has started!';
  } else {
    btn.textContent = 'Start machine';
    txt.textContent = 'The machine is stopped.';
  }
}
