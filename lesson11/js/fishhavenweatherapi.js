const summaryapiURL = "https://api.openweathermap.org/data/2.5/weather?id=5585010&units=imperial&appid=36089ae9649ea39369703e6946f36ac3";
fetch(summaryapiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    //console.log(jsObject);
    document.getElementById('currently').textContent = jsObject.weather[0].description;
    document.getElementById('current-temp').textContent = Math.round(jsObject.main.temp);
    document.getElementById('humidity').textContent = jsObject.main.humidity;
    document.getElementById('wind-speed').textContent = jsObject.wind.speed;

    let temp = jsObject.main.temp;
    let speed = jsObject.wind.speed;

  document.querySelector("#windchill").textContent = "N/A";
  function windchill(t,s) {
      let f = 35.74 + (0.6215 * t) - (35.75 * (Math.pow(s , 0.16))) + (0.4275 * (t * (Math.pow(s , 0.16))))
      return f;
  }
  
  
  if (temp<=50 && speed>=3) {
      document.querySelector('#windchill').innerHTML = Math.round(windchill(temp,speed))+"&deg;"+" F";
  }
  })
  ;



const forecastapiURL = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=36089ae9649ea39369703e6946f36ac3";
fetch(forecastapiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    //console.log(jsObject);
    const ForecastDays = jsObject.list.filter((element)=>element.dt_txt.includes('18:00:00'))
    //console.log(ForecastDays);
    const dayTitle = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  
    for (let i = 0; i < ForecastDays.length; i++ ) {
        let card = document.createElement('section');
        let weekday = document.createElement('p')
        let picture = document.createElement('img')
        let temp = document.createElement('p')

        card.setAttribute('class', 'forcastday');

        let d = new Date(ForecastDays[i].dt_txt);
        weekday.textContent = dayTitle[d.getDay()];
        
        const imagesrc = 'https://openweathermap.org/img/w/' + ForecastDays[i].weather[0].icon + '.png';  // note the concatenation
        const desc = ForecastDays[i].weather[0].description;  // note how we reference the weather array
        picture.setAttribute('src', imagesrc);  // focus on the setAttribute() method
        picture.setAttribute('alt', desc);

        temp.innerHTML = Math.round(ForecastDays[i].main.temp)+"&deg;"+" F";

        card.appendChild(weekday);
        card.appendChild(picture);
        card.appendChild(temp);

        document.querySelector('div.forcasttable').appendChild(card);
    }
  });