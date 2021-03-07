const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json'

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    //console.table(jsonObject);  // temporary checking for valid response and data parsing

    const towns = jsonObject['towns'];
    //Create a method to sort towns alphabettically
    function GetSortOrder(prop) {    
        return function(a, b) {    
            if (a[prop] > b[prop]) {    
                return 1;    
            } else if (a[prop] < b[prop]) {    
                return -1;    
            }    
            return 0;    
        }    
    }    
        
    towns.sort(GetSortOrder("name"));
    //console.log(towns)
    // now that I know the order, print the towns I want. Use CSS to put Fish Haven last
    for (let i = 0; i < towns.length; i++ ) {
        if(towns[i].name === "Preston" || towns[i].name === "Fish Haven" || towns[i].name === "Soda Springs") {

            let card = document.createElement('section');

            let name = document.createElement('h3');
            let motto = document.createElement('p');
            let yearFounded = document.createElement('p');
            let currentPopulation = document.createElement('p');
            let averageRainfall = document.createElement('p');
            let image = document.createElement('img');
            let text = document.createElement('div');

            name.textContent = towns[i].name;
            motto.textContent = towns[i].motto;
            yearFounded.textContent = 'Year Founded: '+ towns[i].yearFounded;
            currentPopulation.textContent = 'Current Population: '+ towns[i].currentPopulation;
            averageRainfall.textContent = 'Average Annual Rainfall: '+ towns[i].averageRainfall + ' inches';
            image.setAttribute('src', "images/index/" + towns[i].photo);
            image.setAttribute('alt', towns[i].name);
            text.setAttribute('id', 'text');

            card.appendChild(text);
            card.appendChild(image);
            text.appendChild(name);
            text.appendChild(motto);
            text.appendChild(yearFounded);
            text.appendChild(currentPopulation);
            text.appendChild(averageRainfall);


            document.querySelector('div.cards').appendChild(card);
        }
    }
  });