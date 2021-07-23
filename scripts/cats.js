class Cats {
  constructor(info) {
    this.info = info
  }
  get catsInfo() {
    return this.info
  }
}

const calculateWeight = (weight) => {
  let ind = weight.indexOf('-')
  let weight1 = Number(weight.slice(0, ind).trim())
  let weight2 = Number(weight.slice(ind + 1).trim())
  let avgWeight = (weight1 + weight2) / 2
  return avgWeight
}

const createCats = (image, name, origin, weight, wikipedia_url) => {
  const catsLink = document.createElement('a')
  catsLink.className = 'cat'
  catsLink.href = wikipedia_url
  catsLink.target = "_blank"
  const catDiv = `
      <img src="${image}" alt=${name}>
      <p>Name : ${name}</p>
      <p>Origin : ${origin}</p>
      <p>Avg Weight : ${calculateWeight(weight)}kg</p>
    </div>
  `
  catsLink.innerHTML = catDiv
  catsDisplay.appendChild(catsLink)
}

const getCatsInfo = () => {
  getCatsAPI().then((data) => {
    cats = new Cats(data)
    catsDisplay.innerHTML = ''
    for (const cat of data) {
      const {
        url,
        name,
        origin,
        imperial,
        wikipedia_url
      } = cat
      createCats(url, name, origin, imperial, wikipedia_url)
    }

  }).catch((error) => {
    catsDisplay.innerHTML = `<div>
     <h3>Unable to fetch the Cats Data.Please try after some time!</h3>
   </div>`
  })
}
const getSearchResults = (catSearch, catsInfo) => {
  catsDisplay.innerHTML = ''
  const filterCats = catsInfo.filter(cat => cat.name.toLowerCase().includes(catSearch.toLowerCase()) || cat.origin.toLowerCase().includes(catSearch.toLowerCase()) || calculateWeight(cat.imperial) == catSearch)
  if (filterCats.length == 0) {
    catsDisplay.innerHTML = `<div>
     <h3>No matches for the search word '${catSearch}' !</h3>
   </div>`
  } else {
    for (const cat of filterCats) {
      const {
        url,
        name,
        origin,
        imperial,
        wikipedia_url
      } = cat
      createCats(url, name, origin, imperial, wikipedia_url)
    }
  }

}