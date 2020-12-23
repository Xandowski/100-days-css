const imgContainer = document.querySelectorAll('.img-container')
const fromTop = document.querySelector('.from-top')
const fromBottom = document.querySelector('.from-bottom')
const photo = document.querySelector('.photo')
const backBtn = document.querySelector('.btn')

for(let i = 0; i < 4; i++) {
  imgContainer[i].addEventListener('click', () => {
    fromTop.classList.toggle('-from-top-active')
    fromBottom.classList.toggle('-from-bottom-active')
    photo.classList.toggle('-photo-active')
  })
}

backBtn.addEventListener('click', () => {
  fromTop.classList.remove('-from-top-active')
  fromBottom.classList.remove('-from-bottom-active')
  photo.classList.remove('-photo-active')
})

console.log(imgContainer)