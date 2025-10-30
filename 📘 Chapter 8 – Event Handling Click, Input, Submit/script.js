let bouton = document.getElementById("btn-test");
let champNom = document.getElementById("nom");
let formulaire = document.getElementById("form-test");

bouton.addEventListener("click", function() {
  console.log("Le bouton a été cliqué !");
});

champNom.addEventListener("input", function() {
  console.log("Texte saisi : " + champNom.value);
});

formulaire.addEventListener("submit", function(e) {
  e.preventDefault();
  console.log("Formulaire soumis avec le nom : " + champNom.value);
});
