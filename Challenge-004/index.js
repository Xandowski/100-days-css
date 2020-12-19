const snow = document.querySelector('.snow');

for(let i = 0; i<= 10; i++) {
  if(i >= 10) {
    for(let n = 0; n <= 10; n++){
      snow.innerHTML += "<div class='snowball-small'></div>"
    }
  } else {
    snow.innerHTML += "<div class='snowball-big'></div>"
  }
}