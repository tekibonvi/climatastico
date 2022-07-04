

let button = document.getElementById("button")

async function validate(newCity){
    let cities = getCitiesFromLocalStorage()
    if (cities.includes(newCity.value)){
        return mensajes.warning();
    }
    if (await getApi(newCity) == "error"){
        return mensajes.error()
    }
    else{
        return mensajes.sucess()
    }
}
async  function addNewCityToLocalStorage(){

    let warningMess = document.getElementById("warning")
    let successMess = document.getElementById("sucess")
    let errorMsg = document.getElementById("error")

        mensajes = {
        warning : function(){
            warningMess.style.display = "block";
            PopMsgs(warningMess);
        },
        sucess: function(){
            successMess.style.display = "block";
            cities.push(newCity.value);
            localStorage.setItem("CITIES", JSON.stringify(cities));
            PopMsgs(successMess);
        },
        error:  function(){
        errorMsg.style.display = "block";
        PopMsgs(errorMsg);
    },
    }
   

    let cities = getCitiesFromLocalStorage()
    let newCity = document.getElementById("agregarciudad")

    validate(newCity)


}


button.addEventListener('click',addNewCityToLocalStorage)