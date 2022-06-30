// La pasamos a common.js para poder usarla en el index.js
//function getCitiesFromLocalStorage(){
//    let cities = localStorage.getItem("CITIES")
//    
//    if (cities){
//        cities = JSON.parse(cities);
//    }else{
//        cities = [];
//    }
//    return cities;
//}

let button = document.getElementById("button")
function addNewCityToLocalStorage(){

    let warningMess = document.getElementById("warning")
    let successMess = document.getElementById("sucess")
    let errorMsg = document.getElementById("error")
    let cities = getCitiesFromLocalStorage()
    let newCity = document.getElementById("agregarciudad")

    function validate(){
        if (cities.includes(newCity.value)){
            return "warning";
        }
       // else{ 
       //     if (await getApi(newCity.value) == "error") {
       //         return "error";
       // }
        else{
            return "sucess"
        }
    }

    switch(validate()){
      case "warning":
        warningMess.style.display = "block";
        PopMsgs()
        break;
      case "sucess":
        successMess.style.display = "block";
        cities.push(newCity.value);
        localStorage.setItem("CITIES", JSON.stringify(cities));
        PopMsgs()
        break;
     case "error":
        errorMsg.style.display = "block";
        break;
    }
}


button.addEventListener('click',addNewCityToLocalStorage)