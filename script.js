console.log("Hello, World!");
// alert("Welcome to the site!");

const name = document.getElementById("nom");
const password = document.getElementById("password");
const email = document.getElementById("email");
const btnSend = document.getElementById("btnSend");


btnSend.addEventListener("click", function() {

    if (name.value === "" || password.value === "" || email.value === "") {
        alert("Please fill in all fields.");
    
       
    }
     else if (!email.value.includes("@")) {
            alert("Please enter a valid email address.");
        }
         else {
        alert(name.value + " " + password.value + " " + email.value);
    }
});


const formInscription = document.getElementById("formSignup");

const signupbutton = document.getElementById("signupbtn");

signupbutton.addEventListener("click", function() {
    formInscription.style.display = "flex";
        formConnexion.style.display = "none";

});

const formConnexion = document.getElementById("formSignIn");

const loginbutton = document.getElementById("signinbtn");

loginbutton.addEventListener("click", function() {
    formConnexion.style.display = "flex";
        formInscription.style.display = "none";

});