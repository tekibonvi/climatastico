const API_KEY = "edff2cc8b5433c9ffe751619332f1945"

function getLocalStorage(){
    let cities = localStorage.getItem("CITIES");
    
    if (cities){
        cities = JSON.parse(cities);
    }else{
        cities = [];
    }
    return cities;
    }
    
    function requestApi(cityName){
        return fetch(`api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric&lang=es`)
        .then(response =>{
            if (response.ok)return response.json();
            throw new Error("error");
        })
        .then(data => {
            showWeather(data);
        })
        .catch(error => {
            return "error"
        });
    }
    