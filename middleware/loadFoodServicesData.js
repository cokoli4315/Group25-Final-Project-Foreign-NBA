/* eslint-disable max-len */
/* eslint-disable import/prefer-default-export */
import fetch from 'node-fetch';

/*
  This function loads data from our third party API
  It has been separated out so it will not be repeated in our "controllers"
  This separation also simplifies our imports - note that 'fetch' is imported here and not elsewhere.
*/

// note "export" keyword here
export async function loadFoodServiceData() {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'ed1e62f0c1msh88a3109dbe383bfp1856b1jsn471351bb78f6',
      'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
    }
  };
  
  fetch('https://api-nba-v1.p.rapidapi.com/players?team=1&season=2021', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
  
}