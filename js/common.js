const API_KEY = "edff2cc8b5433c9ffe751619332f1945"
const weatherData = document.getElementById("city-list")
//const addCity = document.getElementById("agregarciudad")

//const card = {
//    cityWeather : document.getElementById("city"),
//    imgTemp : document.getElementById("img-temp"),
//    celsiusTemp : document.getElementById("celsius-temp"),
//    thermalSens : document.getElementById("thermal-sens"),
//    humidity : document.getElementById("humidity"),
//    wind : document.getElementById("wind"),
//    preassure : document.getElementById("preassure"),
//    weatherCard : document.getElementById("card"),
//    description : document.getElementById("description-temp"),
//}
function getCitiesFromLocalStorage(){
    let cities = localStorage.getItem("CITIES")
    
    if (cities){
        cities = JSON.parse(cities);
    }else{
        cities = [];
    }
    return cities;
}
    
 function getApi(weatherData){
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${weatherData.value}&appid=${API_KEY}&units=metric&lang=es`
    return fetch(url)
    .then(function(res){
        if (res.ok){
            return res.json();
        }else{
            return false;
        }})
//    }).then(function(data){
//        newCard(data)
//    }).catch(error=>{
//        return "error";
//    });
}


function PopMsgs(message){
    popUpMsg = message
    setTimeout(function(){
        popUpMsg.style.display = "none";
    },1500)
}
//CARD QUE VA EN INDEX.js
//async function newCard(data){
//    card.weatherCard.style.display = "flex"
//    card.cityWeather.innerHTML=`${data.name},${data.sys.country}`
//    card.imgTemp.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`
//    card.celsiusTemp.innerHTML=`${data.main.temp} °C`
//    card.description.innerHTML=`${data.weather[0].description}`
//    card.thermalSens.innerHTML=`Sens.Térmica: ${data.main.feels_like} °C`
//    card.humidity.innerHTML=`Humedad: ${data.main.humidity}%`
//    card.wind.innerHTML=`Vientos: ${data.wind.speed} km/h`
//    card.preassure.innerHTML=`Presión: ${data.main.pressure}`
//    }

async function Loader(){
    let miLoader = document.getElementById("loading")
    miLoader.style.display="block"
    setTimeout(function(){
        miLoader.style.display = "none";
    },1500)
}
