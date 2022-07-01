console.log("help")
//;


//Const que da la api:
const publicKey = "AoJ1NNbY71ZleXAh5" //USER ID
const templateId = "template_16o5698";
const serviceId = "service_85s7f69";
const formButton = document.getElementById("mail-btn")




 function sendMail(params){
    emailjs.init('AoJ1NNbY71ZleXAh5');

    var mailParams = {
        name:document.getElementById("name").value,
        email:document.getElementById("email").value,
        message:document.getElementById("message").value
    };
    emailjs.send(serviceId,templateId, mailParams)
        .then(function(res){
            console.log("success",res.status)
        })
 
}



//formButton.addEventListener("submit",(function(e){
//    e.preventDefault(sendMail);
//    ;
//}))