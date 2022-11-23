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

function fetchapi(){
    fetch('https://api-nba-v1.p.rapidapi.com/players?team=1&season=2021')
.then(
  response  => {
    console.log(response);
  },
 rejection => {
    console.error(rejection.message);
 });

}

async function getData() {
    const url = 'https://api-nba-v1.p.rapidapi.com/players?team=1&season=2021'
    const data = await fetch(url);
    const json =  await data.json();
    const reply = json.filter((item) => Boolean(item.geocoded_column_1)).filter((item) => Boolean(item.name));
    return reply; 
}



