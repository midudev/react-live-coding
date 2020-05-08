import {API_KEY, API_URL} from './settings'

const fromApiResponseToGifs = apiResponse => {
  const {data = []} = apiResponse
  if (Array.isArray(data)) {
    const gifs = data.map(image => {
      const {images, title, id} = image
      const { url } = images.downsized_medium
      return { title, id, url }
    })
    return gifs
  }
  return []
}

export default function getGifs ({limit = 25, keyword = 'morty', page = 0} = {}) {
  let apiURL = `${API_URL}/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=${limit}&rating=G&lang=en`

  if (page) {
    apiURL += `&offset=${page * limit}`
  }

  return fetch(apiURL)
    .then(res => res.json())
    .then(fromApiResponseToGifs)
}