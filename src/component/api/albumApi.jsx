const API_URL = 'https://jsonplaceholder.typicode.com/photos?albumId='

export const getAlbum = async (number) => {
  const response = await fetch(`${API_URL}${number}`)

  if (!response.ok) {
    throw new Error(`${response.status}: ${response.text}`);
  }

  return response.json()
}
