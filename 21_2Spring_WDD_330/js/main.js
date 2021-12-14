const links = [
    {
      label: "Week1 notes",
      url: "week1/index.html"
    },
    {
    label: "Week2 notes",
    url: "week2/index.html"
    },
    {
      label: "Week3 notes",
      url: "week3/index.html"
    },
    {
    label: "Week4 notes",
    url: "week4/index.html"
    },
    {
    label: "Week5 notes",
    url: "week5/index.html"
    },  
    {
    label: "Week6 Midterm Checkin",
    url: "week6/index.html"
    }, 
    {
    label: "Week7 notes",
    url: "week7/index.html"
    },   
    {
    label: "Week8 notes",
    url: "week8/index.html"
    },
    {
      label: "Week9 notes",
      url: "week9/index.html"
    },
    {
      label: "Week10 notes",
      url: "week10/index.html"
    },
    {
      label: "Week11 notes",
      url: "week11/index.html"
    },  
    {
      label: "Week12 Progress",
      url: "week12/index.html"
    },
    {
      label: "Week13 Progress",
      url: "week13/index.html"
    },
    {
      label: "Challenge 2",
      url: "challenge2/index.html"
    },  
  ]

for (let i = 0; i < links.length; i++ ) {
    let listitem = document.createElement('li');
    let label = document.createElement('a');

    label.textContent =links[i].label;
    label.setAttribute('href', links[i].url)
    label.setAttribute('target', '_blank')

    listitem.append(label);

    document.querySelector('ol.links').appendChild(listitem);
};
