
let timer = setInterval(setTime, 1000)

function setTime() {
  let date = new Date()
  let hours = date.getHours()
  let minutes = date.getMinutes()
  let seconds = date.getSeconds()
  let arseconds = document.querySelector('.seconds')
  let arminutes = document.querySelector('.minutes')
  let arhours = document.querySelector('.hours')
  arseconds.style.transform = `rotate(${seconds * 360 / 60}deg)`
  arminutes.style.transform = `rotate(${minutes * 360 / 60}deg)`
  arhours.style.transform = `rotate(${hours * 360 / 12}deg)`
}
