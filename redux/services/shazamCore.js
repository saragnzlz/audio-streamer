import {createApi}
const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'da203a529cmsh945f0cce25b01dap1cf1f4jsn24f9b87b98cf',
      'X-RapidAPI-Host': 'shazam-core.p.rapidapi.com'
    }
  };
  
  fetch('https://shazam-core.p.rapidapi.com/v1/charts/world', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));

export const shazamCoreApi = ; 