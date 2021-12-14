let temp = document.querySelector("#current-temp").textContent;
let speed = document.querySelector("#wind-speed").textContent;
document.querySelector("#windchill").textContent = "N/A";
function windchill(t,s) {
    let f = 35.74 + (0.6215 * t) - (35.75 * (Math.pow(s , 0.16))) + (0.4275 * (t * (Math.pow(s , 0.16))))
    return f;
}


if (temp<=50 && speed>=3) {
    document.querySelector('#windchill').innerHTML = Math.round(windchill(temp,speed))+"&deg;"+" F";
} 


