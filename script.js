const btn = document.getElementById("submit");
const nom = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");

console.log(btn);
console.log(nom.value);
console.log(email.value);
console.log(password.value);

btn.addEventListener("click", function(event) {

    event.preventDefault();

    if (nom.value === "" || email.value === "" || password.value === "") {
        alert("Veuillez remplir tous les champs du formulaire.");
        return;
    } 

    if (!email.value.includes("@")) {
        alert("Veuillez entrer une adresse email valide.");
        return;
    }

    if(password.value.length < 6) {
        alert("Le mot de passe doit contenir au moins 6 caractères.");
        return;
    }

    const user = {
        name: nom.value,
        email: email.value,
        password: password.value
    };

    console.log(user);

    console.log("Button clicked!");
    console.log("name: " + nom.value);
    console.log("Email: " + email.value);
    console.log("Password: " + password.value);

    alert("bonne inscription");
});