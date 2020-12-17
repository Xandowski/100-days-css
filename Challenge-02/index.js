const hamburger = document.querySelector('.hamburger-icon')
const wrapper = document.querySelector('.wrapper')
const menuList = document.querySelector('.menu-list')
const showInputBtn = document.querySelector('.show-input-btn')
const input = document.querySelector('.input')

hamburger.addEventListener('click', () => {
  wrapper.classList.toggle('-wrapper-active')
  menuList.classList.toggle('-menu-list-active')
})

showInputBtn.addEventListener('click', () => {
  input.classList.toggle('-input-active')
})