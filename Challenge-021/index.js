const btnOne = document.querySelector(".btn-one")
const btnTwo = document.querySelector(".btn-two")
const btnThree = document.querySelector(".btn-three")
const cardOne = document.querySelector(".one")
const cardTwo = document.querySelector(".two")
const cardThree = document.querySelector(".three")

btnOne.addEventListener('click', () => {
  if(!cardOne.classList.contains('-one-inactive') && !cardTwo.classList.contains('-two-active') && !cardThree.classList.contains('-three-active')){
    cardOne.classList.toggle('-one-inactive')
    cardTwo.classList.toggle('-two-active')
  }
})

btnTwo.addEventListener('click', () => {
  if(cardTwo.classList.contains('-two-active')) {
    cardTwo.classList.toggle('-two-active')
    cardThree.classList.toggle('-three-active')
  }
})

btnThree.addEventListener('click', () => {
  if(cardThree.classList.contains('-three-active')) {
    cardThree.classList.toggle('-three-active')
    cardOne.classList.toggle('-one-inactive')
  }
})


