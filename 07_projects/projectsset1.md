# Projects Related to DOM

##  project link - Chai aur Code

[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

## project link - My account

[Click here](https://stackblitz.com/edit/stackblitz-starters-wmsmjtbs?file=package.json)

# Solution Code

## Project 1: 

```javascript

const colors = document.querySelectorAll('.color')
const body = document.querySelector('body')

colors.forEach( (color) =>
{
    console.log(color)
  color.addEventListener('click',function(event){
    console.log(event)
    console.log(event.target)
    body.style.backgroundColor = event.target.id;
  })
})

```
## Project 2:

```javascript

const form = document.querySelector('#form')

// here we will not take values, they can be empty.
// const height = Integer.parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function(e){
  e.preventDefault()

  const height = parseInt(document.querySelector('#height').value)
  const weight = parseInt(document.querySelector('#weight').value)

  const result = document.querySelector('#result')

  console.log(result)

  if(height === '' || height < 0 || isNaN(height))
    result.innerHTML= `Result : Please enter valid height ${height}`
  else if(weight === '' || weight < 0 || isNaN(weight))
    result.innerHTML = `Result : Please enter valid weight ${weight}`

  else{
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);

    let classs = "";

    if(bmi<18.6 )
    classs = 'Under Weight';
    else if(bmi >= 18.6 && bmi <= 24.9)
    classs = 'Normal Range'
    else if(bmi > 24.9) 
    classs = 'Over Weight'

    console.log(classs)

    // show results.
    result.innerHTML = `Result : ${bmi} <br> Your BMI is classified under: ${classs}`
  }
  console.log(result.innerText)
})

```

## Project 3:

``` javascript

// const clock = document.getElementsById('clock')
const clock = document.querySelector('#clock')
console.log(clock)

// const date = new Date()
// console.log(clock)

// interval is in milli second.

setInterval(function(){
  const date = new Date()
  // console.log(date.toLocaleTimeString())
  clock.innerText = date.toLocaleTimeString();
},1000);

```

## Poject 4 Solution

``` javascript

let random = parseInt(Math.random() * 100 + 1);
console.log(random);

const submit = document.getElementById('submit-guess');
const input = document.getElementById('input-guess');
const prevGuesses = document.getElementById('prev-guesses');
const guessRem = document.getElementById('guess-rem');
const result = document.querySelector('.guess-result');
const paras = document.querySelector('.paras');

// console.log(result)
// console.log(paras)
// console.log(paras[1])

let prevGues = [];
let inputNum;
let guessRemain = parseInt(guessRem.innerHTML);
let starAgain = document.createElement('button');
let playGame = true;
// console.log(starAgain)
// paras[0].appendChild(starAgain)
// console.log(paras)

// console.log(guessRemain+" "+ typeof(guessRemain))

if(playGame){
submit.addEventListener('click', function (e) {
  e.preventDefault();
  inputNum = parseInt(input.value);
  checkInput(inputNum);
});
}

function checkInput(inputNum) {
  if (inputNum < 1 || inputNum > 100 || isNaN(inputNum)) {
    alert('Please Enter a valid Number between 0 and 100');
  } else if (guessRemain == 0) {
    input.value = '';
    // if(inputNum == random)
    // guessNum(inputNum);
    displayMessage(`Game over. Number was ${random}`);
    endGame();
  } else {
    guessNum(inputNum);
    input.value = '';
  }
}

function guessNum(inputNum) {
  prevGues.push(inputNum + '  ');
  guessRemain--;
  if (inputNum === random) {
    displayMessage('You Guessed it Right');
    endGame();
  } else if (inputNum < random) displayMessage('Number is TOOO low');
  else displayMessage('Number is TOOO high');
}

function displayMessage(message) {
  prevGuesses.innerHTML = prevGues;
  guessRem.innerHTML = guessRemain;
  result.innerText = message;
}

function endGame() {
  input.setAttribute('disabled', '');
  submit.setAttribute('disabled', '');
  starAgain.innerHTML = '<p id="startAgain">Start new Game</p>';
  // starAgain.id = 'startAgain';
  console.log(starAgain)
  paras.appendChild(starAgain);
  playGame = false;
  startOver();
}

function startOver() {
  const but = document.querySelector('#startAgain')
  but.addEventListener('click', function () {
    input.removeAttribute('disabled');
    submit.removeAttribute('disabled');
    prevGuesses.innerHTML = '';
    prevGues = [];
    paras.removeChild(starAgain);
    result.innerHTML = '';
    guessRem.innerHTML = '10';
    guessRemain = 10;
    random = parseInt(Math.random() * 100 + 1);
    playGame = true;
    console.log(random);
  });
}


```