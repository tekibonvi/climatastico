const API_KEY = "edff2cc8b5433c9ffe751619332f1945"
const weatherData = document.getElementById("city-list")
const addCity = document.getElementById("agregarciudad")
const cityWeather = document.getElementById("city")
const imgTemp = document.getElementById("img-temp")
const celsiusTemp = document.getElementById("celsius-temp")
const thermalSens = document.getElementById("thermal-sens")
const humidity = document.getElementById("humidity")
const wind = document.getElementById("wind")
const preassure = document.getElementById("preassure")
const weatherCard = document.getElementById("card")
const description = document.getElementById("description-temp")

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
            throw new Error("error");
        }
    }).then(function(data){
        newCard(data)
    }).catch(error=>{
        return "error";
    });
}


function PopMsgs(message){
    popUpMsg = message
    setTimeout(function(){
        popUpMsg.style.display = "none";
    },1500)
}

async function newCard(data){
    weatherCard.style.display = "flex"
    cityWeather.innerHTML=`${data.name},${data.sys.country}`
    imgTemp.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`
    celsiusTemp.innerHTML=`${data.main.temp} °C`
    description.innerHTML=`${data.weather[0].description}`
    thermalSens.innerHTML=`Sens.Térmica: ${data.main.feels_like} °C`
    humidity.innerHTML=`Humedad: ${data.main.humidity}%`
    wind.innerHTML=`Vientos: ${data.wind.speed} km/h`
    preassure.innerHTML=`Presión: ${data.main.pressure}`
    }