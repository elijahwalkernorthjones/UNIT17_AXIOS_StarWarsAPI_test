

async function getData(){
    const response = await axios.get('https://swapi.dev/api/planets/');
    const {next, results} = response.data; //destructuring to shorten loop syntax
    for (let planet of results){
        console.log(planet.name);
    }
console.log('  ')
    const response2 = await axios.get(next);
    for (let planet of response2.data.results){
        console.log(planet.name);
    }
}

getData();