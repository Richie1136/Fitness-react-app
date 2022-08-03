export const exerciseOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
    'X-RapidAPI-Key': 'e9f136fd86msh20374d953bfb05ep137d7ejsnaede58975cae'
  },
};

export const baseURL = 'https://exercisedb.p.rapidapi.com/exercises'

export const fetchData = async (url, options) => {
  const response = await fetch(url, options)
  const data = response.json()
  return data
}