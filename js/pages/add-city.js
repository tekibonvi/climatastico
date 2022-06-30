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
async function validate(newCity){
    let cities = getCitiesFromLocalStorage()
    if (cities.includes(newCity.value)){
        return "warning";
    }
    if (await getApi(newCity) == "error"){
        return "error"
    }
    else{
        return "sucess"
    }
}
async  function addNewCityToLocalStorage(){

    let warningMess = document.getElementById("warning")
    let successMess = document.getElementById("sucess")
    let errorMsg = document.getElementById("error")
    let cities = getCitiesFromLocalStorage()
    let newCity = document.getElementById("agregarciudad")



  switch(await validate(newCity)){
      case "warning":
        warningMess.style.display = "block";
        PopMsgs(warningMess)
        break;
      case "sucess":
        successMess.style.display = "block";
        cities.push(newCity.value);
        localStorage.setItem("CITIES", JSON.stringify(cities));
        PopMsgs(successMess)
        break;
     case "error":
        errorMsg.style.display = "block";
        PopMsgs(errorMsg)
        break;
    }
}


button.addEventListener('click',addNewCityToLocalStorage)