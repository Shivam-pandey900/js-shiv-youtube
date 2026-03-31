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

```html

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="../styles.css">
  <link rel="stylesheet" href="style.css">
  <title>Guess the Number - Game</title>
</head>
<body>
  <nav>
    <a href= "/" aria-current = 'page'>Home</a>
    <a href= "https://github.com/Shivam-pandey900" >MyGitHubProfile</a>
  </nav>

  <div class="main">
    <h1>Number Guessing Game</h1>
    <p id="text">Try and guess a random number between 0 and 100.</p>
    <p>You have 10 attempts to guess the right number.</p>
    <br>
    <form id="form">
      <p class="heading">Guess a Number</p>
      <input type="text" id="input-guess" placeholder="Enter"><br>
      <input type="submit" id="submit-guess" value="Submit Guess">
    </form>

    <div class="paras">
      <p>Previous Guesses: <span id="prev-guesses"></span></p>
      <p>Guesses Remaining: <span id="guess-rem">10</span></p>
      <p class = "guess-result"></p>
    </div>
  </div>
</body>
<script src="shivam.js"></script>
</html>

```

``` css
h1 {
  text-align: center;
  background-color: black;
}

.main {
  background-color: #474747;
  text-align: center;
  height: 650px;
}

#text{
  margin-top: 30px;
}


.heading{
  font-size: 55px;
  margin-top: 0px;
  color: #fff;
  margin-bottom: 25px;
}

#input-guess{
  color: black;
  width: 270px;
  height: 50px;
  font-size: 30px;
  border-style: none;
  margin-top: 0px;
  border: 5px solid gray;
  text-align: center;
}

#submit-guess{
  color: #fff;
  width: 150px;
  height: 40px;
  background-color: black;
  border-radius: 15px;
  margin-top: 20px;
  font-size: 20px;
  border: none;
}

#startAgain{
  background-color: green;
  color: black;
  font-size: 20px;
  width: 200px;
  height: 40px;
  border: none;
  border-radius: 10px;
  text-align: center;
}

.guess-result{
  font-size: 40px;
}

```

```css
styles.css:

* {
  box-sizing: border-box;
}


nav {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  gap: 0.5rem;
  border-bottom: #fff;
  background-color: #fff;
}

nav a {
  display: inline-block;
  text-decoration: none;
  min-width: 9rem;
  padding: 0.5rem;
  border: solid 1px #212121;
  border-radius: 0.2rem;
  text-align: center;
  color: #212121;
}

body{
  margin: 0;
  font-family: system-ui, sans-serif;
  background-color: #212121;
  color: #fff;
}

main {
  padding: 1rem;
}

h1 {
  font-weight: bold;
  font-size: 1.5rem;
  color: #fff;
}

#main {
  background-color: #212121;
}

.projects{
  display: flex;
  flex-direction: column;
}
.project-link {
  color: black;
  border-radius: 10px;
  background-color: #fff;
  padding: 10px 30px;
  border: 2px solid #212121;
  text-decoration: none;
  margin-top: 5px;
}

```