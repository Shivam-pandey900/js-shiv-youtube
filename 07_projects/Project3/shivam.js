const clock = document.querySelector('.clock')
// const clock = Document.getElementsByClassName('clock')
console.log(clock)

// const date = new Date()

// interval is in milli second.

setInterval(function(){
  const date = new Date()
  // console.log(date.toLocaleTimeString())
  clock.innerHTML = date.toLocaleTimeString()
},1000)