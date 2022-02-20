const API_KEY = "cb93519dd17ed9272daeaf3633ef8c33"

function onGeoOk(position){
    
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        const weather = document.querySelector("#weather span:first-child")
        const city = document.querySelector("#weather span:last-child")
        weather.innerText = data.weather[0].main;
    });

}

function onGeoErr(){
    alert("Sorry, we can't find you.")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoErr)