const marker = document.querySelector(".marker")
const card = document.querySelector(".card")

marker.addEventListener('click', () => {
  marker.classList.toggle('-inactive')
  card.classList.toggle('-active')
})

card.addEventListener('click', () => {
  marker.classList.toggle('-inactive')
  card.classList.toggle('-active')
})