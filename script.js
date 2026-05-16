const nom = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const submit = document.getElementById("submit");

console.log(nom);
console.log(email);
console.log(password);
console.log(submit);

submit.addEventListener("click", function(event) {
    if (nom.value === "" || email.value === "" || password.value === "") {
        alert("Veuillez remplir tous les champs.");
    return;
    }
    if (password.value.length < 6) {
        alert("Le mot de passe doit contenir au moins 6 caractères.");
    return;
    }
    event.preventDefault();
    console.log(nom.value);
    console.log(email.value);
    console.log(password.value);
    alert("Inscription réussie !");
});