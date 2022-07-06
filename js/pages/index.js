let cityList = document.getElementById("city-list")
function getSelectCities(){
    let cities = getCitiesFromLocalStorage()
    let errorMsg = document.getElementById("errorload")
    let getterButton = document.getElementById("get-data")

    //Validamos que el LocalStorage tenga cargada info.
    //Si tiene data, mapea el array y lo carga en el html.
    if (cities.length === 0 ){
        getterButton.disabled = "true"
        errorMsg.style.display = "block"
        PopMsgs(errorMsg)
    }
    else{
        getterButton.enabled = "true"
        errorMsg.style.display = "none"
        cities.map(function(cities){

        cityList.innerHTML += `<option class = "cities">${cities}</option>`
        
    })}
}
//MI SUPER TARJETA
const card = {
    cityWeather : document.getElementById("city"),
    imgTemp : document.getElementById("img-temp"),
    celsiusTemp : document.getElementById("celsius-temp"),
    thermalSens : document.getElementById("thermal-sens"),
    humidity : document.getElementById("humidity"),
    wind : document.getElementById("wind"),
    preassure : document.getElementById("preassure"),
    weatherCard : document.getElementById("card"),
    description : document.getElementById("description-temp"),
}
//Esto me permite tomar los valores de la lista, sin que la pagina actualicce.
async function getElements(){
let weatherData = document.getElementById("city-list")
let errorMsg = document.getElementById("errorload")
let getterButton = document.getElementById("get-data")
let cities = getCitiesFromLocalStorage()
getterButton.addEventListener('click',function(e){
    e.preventDefault();
  
     if (cities.includes(weatherData.value)){
         superCard()
    
        }
  
    
})}

getElements()
getSelectCities()


 function superCard() {getApi(weatherData)
    .then(function(data)
    {
    card.weatherCard.style.display = "flex"
    card.cityWeather.innerHTML=`${data.name},${data.sys.country}`
    card.imgTemp.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`
    card.celsiusTemp.innerHTML=`${data.main.temp} °C`
    card.description.innerHTML=`${data.weather[0].description}`
    card.thermalSens.innerHTML=`Sens.Térmica: ${data.main.feels_like} °C`
    card.humidity.innerHTML=`Humedad: ${data.main.humidity}%`
    card.wind.innerHTML=`Vientos: ${data.wind.speed} km/h`
    card.preassure.innerHTML=`Presión: ${data.main.pressure}`})
}


