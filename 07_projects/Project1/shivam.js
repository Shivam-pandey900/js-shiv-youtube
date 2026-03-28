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