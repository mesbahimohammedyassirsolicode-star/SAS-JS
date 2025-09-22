let continueInput = true;

while (continueInput) {
    let Compétences = prompt("Entry your Compétences :");
    let resultat;

    if (Compétences === null || Compétences === "exit") {
        continueInput = false;
        alert("Goodbye!");
        break;
    }

    switch (Compétences) {
        case "C1":
            resultat = "Maquetter une application";
            alert(resultat);
            break;
        case "C2":
            resultat = "Réaliser une interface utilisateur web statique et adaptable";
            alert(resultat);
            break;
        case "C3":
            resultat = "Développer une interface utilisateur web dynamique";
            alert(resultat);
            break;
        case "C5":
            resultat = "Créer une base de données - niveau 1";
            alert(resultat);
            break;
        case "C6":
            resultat = "Développer les composants d’accès aux données - niveau 1";
            alert(resultat);
            break;
        case "C7":
            resultat = "Développer la partie back-end d’une application web ou web mobile - niveau 1";
            alert(resultat);
            break;
        case "C8":
            resultat = "Réaliser une interface utilisateur avec une solution de gestion de contenu ou e-commerce";
            alert(resultat);
            break;
        case "C4":
            resultat = "Réaliser une interface utilisateur avec une solution de gestion de contenu ou e-commerce";
            alert(resultat);
            break;
        case "T1":
            resultat = "Comprendre la démarche pédagogique à Solicode";
            alert(resultat);
            break;
        case "T2":
            resultat = "Collaboration & posture professionnelle";
            alert(resultat);
            break;
        case "T3":
            resultat = "Gérer un projet avec Git & GitHub";
            alert(resultat);
            break;
        default:
            alert("Compétence non reconnue. Veuillez réessayer.");
            break;
    }
}