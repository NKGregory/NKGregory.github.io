fetch('../lesson14/data.json')
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
   //console.table(jsonObject);  // temporary checking for valid response and data parsing
    const businesses = jsonObject['businesses'];
    //prophets.forEach(prophet >{})

    for (let i = 0; i < businesses.length; i++ ) {
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let phone = document.createElement('p')
        let website = document.createElement('a')
        let picture = document.createElement('img')
            
        h2.textContent = businesses[i].name;
        picture.setAttribute('src', businesses[i].logo);
        picture.setAttribute('alt', businesses[i].name + 'logo')
        phone.textContent = businesses[i].phone;
        website.textContent =businesses[i].website;
        website.setAttribute('href', businesses[i].website)
        website.setAttribute('target', '_blank')



        card.appendChild(h2);
        card.appendChild(phone);
        card.appendChild(website);
        card.appendChild(picture);


        document.querySelector('div.cards').appendChild(card);
    }
});