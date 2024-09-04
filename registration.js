let button = document.getElementById("btn")




button.addEventListener('click', function (event) {
    let firstName = document.getElementById("firstname").value
let lastName = document.getElementById("firstname").value
let phone = document.getElementById("phone").value
let email = document.getElementById("email").value
let password = document.getElementById("password").value
let confirmPass= document.getElementById("confirmPass").value

let userDetails ={
    
    firstName:firstName,
    lastName:lastName,
    phone:phone,
    email:email,
    password:password,
    confirmPass:confirmPass

}


saveFormData(userDetails)
alert("saved successfully")


window.location.href = "login.html";

    
})





function saveFormData(formData) {
    localStorage.setItem("userDetails", JSON.stringify(formData))
}