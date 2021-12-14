function getPhoto(){
    const NasaKey = '4FgBDfn5w3C4M14ck0YXgzuxaYhL79R3sGyBeYOL';
    const yesterdate = new Date(Date.now() - 86400000).toLocaleDateString('en-CA');
    const api_url = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${yesterdate}&api_key=${NasaKey}`;

    fetch(api_url)
        .then(response => response.json())
        .then(data => {
            let source = data.photos[0].img_src;
            let camera = data.photos[0].camera.full_name;
            let date = data.photos[0].earth_date;
            let sol = data.photos[0].sol;
            let image = document.createElement('img');
            let caption = document.createElement('figcaption');
            let title = document.createElement('figcaption');
            caption.textContent = "View from the " + camera + " aboard the Curiousity Rover";
            title.textContent = "Image captured on Earth Date " + date;
            image.setAttribute('src', source);
            image.setAttribute('alt', caption.textContent);
            document.querySelector('figure.picontainer').appendChild(title);
            document.querySelector('figure.picontainer').appendChild(image);
            document.querySelector('figure.picontainer').appendChild(caption);
            document.getElementById("currentsol").innerHTML = sol;         
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

function marsage() {
    var inputNumber = document.getElementById("ageinput").value;
    if(inputNumber == ""){
        return;
    }
    let newage = Math.round(((inputNumber*365)/687)*100)/100
    document.getElementById("ageoutput").innerHTML = newage + " Martian Years";
};

function marsweight() {
    var inputNumber = document.getElementById("weightinput").value;
    if(inputNumber == ""){
        return;
    }
    let neweight = Math.round(((inputNumber/9.81)*3.711)*100)/100
    document.getElementById("weightoutput").innerHTML = neweight + " kg/lbs";
};