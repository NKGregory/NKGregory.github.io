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
        if(towns[i].name === "Preston") {  
            let event1 = document.createElement('p')
            let event2 = document.createElement('p')
            let event3 = document.createElement('p')

            event1.textContent = towns[i].events[0];
            event2.textContent = towns[i].events[1];
            event3.textContent = towns[i].events[2];

            document.querySelector('div.events').appendChild(event1);
            document.querySelector('div.events').appendChild(event2);
            document.querySelector('div.events').appendChild(event3);
        }
    }
  });