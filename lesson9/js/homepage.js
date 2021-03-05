const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json'

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    //console.table(jsonObject);  // temporary checking for valid response and data parsing

    const towns = jsonObject['towns'];

    for (let i = 0; i < towns.length; i++ ) {
        if(towns[i].name === "Preston" || towns[i].name === "Fish Haven" || towns[i].name === "Soda Springs") {

            let card = document.createElement('section');
            let name = document.createElement('h2');
            let motto = document.createElement('p');
            let yearFounded = document.createElement('p');
            let currentPopulation = document.createElement('p');
            let averageRainfall = document.createElement('p');


            name.textContent = towns[i].name;
            motto.textContent = towns[i].motto;
            yearFounded.textContent = 'Year Founded: '+ towns[i].yearFounded;
            currentPopulation.textContent = 'Current Population: '+ towns[i].currentPopulation;
            averageRainfall.textContent = 'Average Rainfall: '+ towns[i].averageRainfall;

            card.appendChild(name);
            card.appendChild(motto);
            card.appendChild(yearFounded);
            card.appendChild(currentPopulation);
            card.appendChild(averageRainfall);

            document.querySelector('div.cards').appendChild(card);
        }
    }
  });

   // for (let i = 0; i < prophets.length; i++ ) {
       // let card = document.createElement('section');
       // let h2 = document.createElement('h2');
        //let birthdate = document.createElement('p')
       // let birthplace = document.createElement('p')
        //let picture = document.createElement('img')
            
        //h2.textContent = prophets[i].name + ' ' + prophets[i].lastname;
       // birthdate.textContent = 'Date of Birth: '+ prophets[i].birthdate;
        //birthplace.textContent = 'Place of Birth: ' + prophets[i].birthplace;
        //picture.setAttribute('src', prophets[i].imageurl);
        //picture.setAttribute('alt', prophets[i].name + ' ' + prophets[i].lastname + '-' + i)


       // card.appendChild(h2);
        //card.appendChild(birthdate);
        //card.appendChild(birthplace);
        //card.appendChild(picture);


        //document.querySelector('div.cards').appendChild(card);
 // }
//});

//towns.filter(town=>town.name === "Preston");