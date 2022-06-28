
function getCitiesFromLocalStorage(){
    let cities = localStorage.getItem("CITIES")
    
    if (cities){
        cities = JSON.parse(cities);
    }else{
        cities = [];
    }
    return cities;
}

function addNewCityToLocalStorage(){
    
    let warningMess = document.getElementById("warning")
    let successMess = document.getElementById("sucess")
    let cities = getCitiesFromLocalStorage()
    let newCity = document.getElementById("agregarciudad")

    function validate(){
        if (cities.includes(newCity.value)){
            return "warning";
        }else{
            return "sucess"
        }
    }
 

    switch(validate()){
      case "warning":
        warningMess.style.display = "block";
        break;
      case "sucess":
        successMess.style.display = "block";
        cities.push(newCity.value);
        localStorage.setItem("CITIES", JSON.stringify(cities));
        break;

    }
}
