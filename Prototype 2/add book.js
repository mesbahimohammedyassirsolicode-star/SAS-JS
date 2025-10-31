// Function to generate unique code
function generateCode() {
    let bibliotheque = JSON.parse(sessionStorage.getItem('bibliotheque')) || [];
    if (bibliotheque.length === 0) return 1;
    
    let maxCode = 0;
    for (let i = 0; i < bibliotheque.length; i++) {
        if (bibliotheque[i].code > maxCode) {
            maxCode = bibliotheque[i].code;
        }
    }
    return maxCode + 1;
}

// Auto-generate code when page loads
document.addEventListener('DOMContentLoaded', function() {
    let codeInput = document.getElementById("code");
    if (codeInput) {
        codeInput.value = generateCode();
        codeInput.readOnly = true;
    }
});

let form = document.getElementById("form");

form.addEventListener("submit", function(event) {
    event.preventDefault();
    
    // Get form values
    let code = document.getElementById("code").value;
    let titre = document.getElementById("titre").value;
    let auteur = document.getElementById("auteur").value;
    let annee = document.getElementById("annee").value;
    let prix = document.getElementById("prix").value;
    let disponible = document.getElementById("disponible").checked;
    
    
    // Create new book object
    let newBook = {
        code: parseInt(code),
        title: titre,
        author: auteur,
        year: parseInt(annee),
        disponible: disponible,
        price: prix + "dh",
    };
    
    // Get current library from sessionStorage
    let currentBibliotheque = JSON.parse(sessionStorage.getItem('bibliotheque')) || [];
    
    // Add new book to existing array
    currentBibliotheque.push(newBook);
    
    // Save back to sessionStorage
    sessionStorage.setItem('bibliotheque', JSON.stringify(currentBibliotheque));
    
    // Show success message
    alert("Livre ajouté avec succès!");
    
    // Redirect to catalog page
    window.location.href = "catalog.html";
});
