import axios from 'axios'

const apiUrl = "https://swapi.dev/api"
const postApi = "https://httpbin.org/post"

export const getPersonas = async(peopleId) => {
  const response = await axios.get(`${apiUrl}/people/${peopleId}/`)
  //console.log(response.data)
  return response.data
}

export const getSpaceShips = async(spaceShipsId) => {
  const response = await axios.get(`${apiUrl}/starships/${spaceShipsId}/`)
  //console.log(response.data)
  return response.data
}

export const getPlanet = async(planetId) => {
  const response = await axios.get(`${apiUrl}/planets/${planetId}/`)
  //console.log(response.data)
  return response.data
}

export const apiPost = async(formApi) => {
  //console.log(form)
  const response = await axios.post(`${postApi}`, formApi)
  return response.data
}