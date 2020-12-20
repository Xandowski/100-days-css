const infoDay = document.querySelector('.info-day')
const infoHours = document.querySelector('.info-hours')
const circle = document.querySelector('.progress-ring-circle')
const radius = circle.r.baseVal.value
const circumference = radius * 2 * Math.PI

setInterval(getData, 1000)

function getData() {
  let data = new Date();

  if(data.getDay() === 0) {
    infoDay.innerHTML = `Sun `
  } else if(data.getDay() === 1) {
    infoDay.innerHTML = `Mon `
  } else if(data.getDay() === 2) {
    infoDay.innerHTML = `Tue `
  } else if(data.getDay() === 3) {
    infoDay.innerHTML = `Wed `
  } else if(data.getDay() === 4) {
    infoDay.innerHTML = `Thu `
  } else if(data.getDay() === 5) {
    infoDay.innerHTML = `Fri`
  } else {
    infoDay.innerHTML = `Sat `
  }

  infoDay.innerHTML += `${data.toLocaleDateString()}`

  infoHours.innerHTML = `${data.toLocaleTimeString('pt-BR', {
    hour12: false
  })}`

  setProgress(data.getSeconds())
  return data.getSeconds();
}

circle.style.strokeDasharray = `${circumference} ${circumference}`;
circle.style.strokeDashoffset = circumference;

function setProgress(percent) {
  const offset = circumference - percent / 60 * circumference;
  circle.style.strokeDashoffset = offset;
}


