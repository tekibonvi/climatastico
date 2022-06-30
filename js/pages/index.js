let cityList = document.getElementById("city-list")
function getSelectCities(){
    let cities = getCitiesFromLocalStorage()
    let errorMsg = document.getElementById("errorload")

    //Validamos que el LocalStorage tenga cargada info.
    //Si tiene data, mapea el array y lo carga en el html.
    if (cities.length === 0 ){
        errorMsg.style.display = "block"
        PopMsgs()
    }
    else{

        errorMsg.style.display = "none"
        cities.map(function(cities){

        cityList.innerHTML += `<option class = "cities">${cities}</option>`
        
    })}
}

//Esto me permite tomar los valores de la lista, sin que la pagina actualicce.
async function getElements(){
let weatherData = document.getElementById("city-list")
let getterButton = document.getElementById("get-data")
getterButton.addEventListener('click',function(e){
    e.preventDefault();
    console.log(weatherData.value)
    getApi()
})}

getElements()
getSelectCities()


function PopMsgs(){
    popUpMsg = document.getElementById("errorload")
    setTimeout(function(){
        popUpMsg.remove()
    },1500)
}

