export const exerciseOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY
  },
};

export const baseURL = 'https://exercisedb.p.rapidapi.com/exercises'

export const fetchData = async (url, options) => {
  const response = await fetch(url, options)
  const data = response.json()
  return data
}

export const videoOptions = {
  method: 'GET',
  headers: {
    // 'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Key': 'e9f136fd86msh20374d953bfb05ep137d7ejsnaede58975cae',

    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};

export const baseYoutubeURL = 'https://youtube-search-and-download.p.rapidapi.com'
