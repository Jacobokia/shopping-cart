let email = document.getElementById("email").value;
let password = document.getElementById("password").value;

let loginBtn = document.getElementById("login-btn");

loginBtn.addEventListener("click", function (event) {
  let loginEmail = document.getElementById("email").value;
  let loginPassword = document.getElementById("password").value;

  alert("heyyyy")

  if(localStorage.getItem("userDetails")){
    let loginDetails = JSON.parse(localStorage.getItem("userDetails"))
    console.log(`login details are ${loginDetails}`)
    if(loginEmail === loginDetails.email && loginPassword === loginDetails.password){
        console.log("login successful")
        window.location.href = "products.html";
    }else{
        console.log("wrong credentials")
    }
  }else{
    console.log("Not a registered user");
  }
});

function loginUser() {}
