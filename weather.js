const weather = document.querySelector("#weather");
const APIkey = "72795d0db3983e723b9e0fb077d65a49";
function success(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}1084275&appid=${APIkey}&units=metric`
    fetch(url).then(Response=>Response.json()).then(data=>{
        
        const name = data.name;
        const weathers = data.weather[0].main;
        weather.innerText = `위치 : ${name} 날씨 : ${weathers}`;
    });
}

function fail(){
    alert("You have to allow to access your location");
}

navigator.geolocation.getCurrentPosition(success, fail);