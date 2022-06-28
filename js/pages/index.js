let select = document.getElementById("city-list")
let errorMsg = document.getElementById("error")


function addCitySection(){
    let cities = getLocalStorage()
    if (cities== []){
        errorMsg.style.display = "block"
    }

}