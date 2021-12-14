const NasaKey = '4FgBDfn5w3C4M14ck0YXgzuxaYhL79R3sGyBeYOL';
const yesterdate = new Date(Date.now() - 86400000).toLocaleDateString('en-CA');
const api_url = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${yesterdate}&api_key=${NasaKey}`;

fetch(api_url)
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        console.log(data.photos[0].img_src)
        }
    )
    .catch((error) => {
        console.error('Error:', error);
        }
    );