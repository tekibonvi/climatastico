const API_KEY = "edff2cc8b5433c9ffe751619332f1945"
const weatherData = document.getElementById("city-list")
const addCity = document.getElementById("agregarciudad")

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
        console.log(data);
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