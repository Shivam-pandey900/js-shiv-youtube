# Projects Related to DOM

##  project link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

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