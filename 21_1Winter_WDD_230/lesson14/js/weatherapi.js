const apiURL = "https://api.openweathermap.org/data/2.5/onecall?lat=41.8365135147246&lon=-111.8326758061393&units=imperial&exclude=minutely,hourly&appid=bacc274594cd208ae1a91c3d1f3d649c";

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

    document.getElementById('current-description').textContent = jsObject.current.weather[0].description;
    document.getElementById('current-temp').textContent = Math.round(jsObject.current.temp);
    document.getElementById('humidity').textContent = jsObject.current.humidity;

    const weekDay = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const ForecastDays = jsObject.daily.slice(1,4)
    console.log(ForecastDays)
    for (let i = 0; i < ForecastDays.length; i++ ) {
        let card = document.createElement('section');
        let weekday = document.createElement('h4')
        let picture = document.createElement('img')
        let temp = document.createElement('p')

        card.setAttribute('class', 'forcastday');

        let unix = (ForecastDays[i].dt)*1000
        let d = new Date(unix)

        weekday.textContent = weekDay[d.getDay()];
        
        const imagesrc = 'https://openweathermap.org/img/w/' + ForecastDays[i].weather[0].icon + '.png';  // note the concatenation
        const desc = ForecastDays[i].weather[0].description;  // note how we reference the weather array
        picture.setAttribute('src', imagesrc);  // focus on the setAttribute() method
        picture.setAttribute('alt', desc);

      temp.innerHTML = Math.round(ForecastDays[i].temp.day)+"&deg;"+" F";

        card.appendChild(weekday);
        card.appendChild(picture);
        card.appendChild(temp);

        document.querySelector('div.forcast').appendChild(card);
   
        if(jsObject.hasOwnProperty("alerts")){
            const alertshow = document.getElementById('alertxt');
            {alertshow.classList.add('showalert')}
            document.getElementById('alertsender').textContent = jsObject.alerts.sender_name;
            //document.getElementById('alertsender').textContent = "United Nations";
            document.getElementById('alertevent').textContent = jsObject.alerts.event;
            //document.getElementById('alertevent').textContent = "Alien Invasion";
            document.getElementById('alertstart').textContent = new Date((jsObject.alerts.start)*1000);
            //document.getElementById('alertstart').textContent = new Date((1617109968)*1000);
            document.getElementById('alertend').textContent = new Date((jsObject.alerts.end)*1000);
            //document.getElementById('alertend').textContent = new Date((1617627757)*1000);
            document.getElementById('alert').textContent = jsObject.alerts.description;
            //document.getElementById('alert').textContent = "Run and Hide";
        } else {
        const alerthide = document.getElementById('alertxt');
        {alerthide.classList.remove('showalert')}
        }

    }
    
  }
  
  );

const alertclose = document.querySelector('.closealert');
const alertshow = document.getElementById('alertxt');

alertclose.addEventListener('click', () => {alertshow.classList.remove('showalert')}, false);