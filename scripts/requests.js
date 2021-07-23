const getCatsAPI = async () => {
  const catsData = []
  const response = await fetch('https://api.thecatapi.com/v1/breeds')
  if (response.status == 200) {
    const data = await response.json()
    for (const cat of data) {
      const {
        image,
        name,
        origin,
        weight,
        wikipedia_url
      } = cat
      if (image && wikipedia_url) {
        const {
          url
        } = image
        const {
          imperial
        } = weight
        if (url) {
          catsData.push({
            url,
            name,
            origin,
            imperial,
            wikipedia_url
          })
        }
      }
    }
    return catsData
  } else {
    throw new Error('Cant fetch cats details')
  }
}