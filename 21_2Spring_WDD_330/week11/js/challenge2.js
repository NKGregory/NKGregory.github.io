function getPhoto(){
    const NasaKey = '4FgBDfn5w3C4M14ck0YXgzuxaYhL79R3sGyBeYOL';
    const yesterdate = new Date(Date.now() - 86400000).toLocaleDateString('en-CA');
    const api_url = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${yesterdate}&api_key=${NasaKey}`;

    fetch(api_url)
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            let source = data.photos[0].img_src;
            let camera = data.photos[0].camera.full_name
            let image = document.createElement('img');
            image.setAttribute('src', source);
            image.setAttribute('alt', "Picture taken from the " + camera + " aboard the Curiousity Rover");
            document.querySelector('div.picontainer').appendChild(image)
            
            }
        )
        .catch((error) => {
            console.error('Error:', error);
            }
        );
};

function date(){
    const yearoptions = {year:'numeric'};
    document.getElementById('currentyear').textContent = new Date().toLocaleDateString('en-US', yearoptions);
    
    const options = {weekday: 'long', day: 'numeric', month: 'long', year:'numeric'};
    document.getElementById('currentdate').textContent = new Date().toLocaleDateString('en-US', options);
};

function marsweight() {
    var inputNumber = document.getElementById("weightinput").value;
    if(inputNumber == ""){
        return;
    }
    let neweight = Math.round(((inputNumber/9.81)*3.711)*100)/100
    document.getElementById("weightoutput").innerHTML = neweight;
};