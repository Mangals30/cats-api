const catsDisplay = document.querySelector('.cats-display')
const searchInput = document.querySelector('.search-cat')
const searchBtn = document.querySelector('.btn')
let cats

getCatsInfo()

searchBtn.addEventListener('click', e => {
  e.preventDefault()
  const catSearch = searchInput.value.toLowerCase()
  getSearchResults(catSearch, cats.catsInfo)
})

searchInput.addEventListener('input', e => {
  console.log('I am changed')
  e.preventDefault()
  const catSearch = searchInput.value.toLowerCase()
  getSearchResults(catSearch, cats.catsInfo)
})