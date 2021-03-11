const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=36089ae9649ea39369703e6946f36ac3";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    document.getElementById('currently').textContent = jsObject.weather[0].description;
    document.getElementById('current-temp').textContent = jsObject.main.temp;
    document.getElementById('humidity').textContent = jsObject.main.humidity;
    document.getElementById('wind-speed').textContent = jsObject.wind.speed;
  });

  const foreapiURL = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=36089ae9649ea39369703e6946f36ac3";
fetch(foreapiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    const substring = '18:00:00'
    for (let i = 0; i < jsObject.length; i++ ) {
      if(jsObject.list[i].dt_txt.includes("18:00")) {
        let card = document.createElement('section');
        let day = document.createElement('p')
        let picture = document.createElement('img')
        let temp = document.createElement('p')

        card.setAttribute('class', 'forcastday');
        day.textContent = jsObject.list[i].main.day;
        const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.list[i].weather[0].icon + '.png';  // note the concatenation
        const desc = jsObject.list[i].weather[0].description;  // note how we reference the weather array
        picture.setAttribute('src', imagesrc);  // focus on the setAttribute() method
        picture.setAttribute('alt', desc);
        temp.innerHTML = Math.round(jsObject.list[i].main.temp)+"&deg;"+" F";

        card.appendChild(day);
        card.appendChild(picture);
        card.appendChild(temp);

        document.querySelector('div.forcasttable').appendChild(card);
      }
    }
  });