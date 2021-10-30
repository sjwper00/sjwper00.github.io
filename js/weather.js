'use strict';

const API_KEY = "241051bf13976dd3ddf8b8d9f247255e";
function onGeoOk(position){

    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const API_KEY = 'f48fcebc03c650b6cea89ac4d2a69b81'
    console.log("You live in", latitude, longitude);
    
    const url = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;
    fetch(url).then(reponse => reponse.json()).then(data => {  //reponse.json은 fetch(url)로 얻은 모든 data를 json한 것이다
        const weather = document.querySelector("#weather span:first-child")
        const city = document.querySelector("#weather span:last-child")
         city.innerText = data.name;
         weather.innerText = `${data.weather[0].main} / ${data.main.temp}°C `;
    }); // fetch = call url
}

function onGeoError(){
    alert("Can't find you. No weather for you");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError); //사용자의 gps, wifi 등등을 이용해 위치를 알아온다. javascript는 geolocationPosition으로 부터 success callback object와 error callback object를 input parameter로 받는다