console.log("Script loaded successfully!");
const btn = document.getElementById("btn");
const nom = document.getElementById("nom");
const email = document.getElementById("email");
const password = document.getElementById("password");
 

console.log(btn);
console.log(nom.value);
console.log(email.value);
console.log(password.value);

const submit = document.getElementById("submit");
if (nom.value === "" || email.value === "" || password.value === "") {
    alert("Veuillez remplir tous les champs du formulaire.");
} 
if (!email.value.includes("@")) {
    alert("Veuillez entrer une adresse email valide.");
}
if(password.value.length < 6) {
    alert("Le mot de passe doit contenir au moins 6 caractères.");
}

submit.addEventListener("click", function(event) {
    event.preventDefault();
    console.log("Button clicked!");
    console.log("Nom: " + nom.value);
    console.log("Email: " + email.value);
    console.log("Password: " + password.value);
    alert("bonne inscription");
} );
console.log("Password: " + password.value);
alert("bonne inscription");