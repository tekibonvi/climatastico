let cityList = document.getElementById("city-list")
function getSelectCities(){
    let cities = getCitiesFromLocalStorage()
    let errorMsg = document.getElementById("errorload")
    if (cities.length === 0 ){
        errorMsg.style.display = "block"
    }
    else{
        errorMsg.style.display = "none"
    cities.map(function(cities){

        cityList.innerHTML += `<option>${cities}</option>`
        
    })}
}

getSelectCities()