const search = document.querySelector('.search-box')
const searchedText = document.querySelectorAll('.searched-text')
const textBox = document.querySelector('.text-box')

search.addEventListener('keypress', (e) => {
  textBox.style.display = 'block'
  let text = e.target.value
  for(let i = 0; i < 3; i++) {
    searchedText[i].textContent = text
  }
})


