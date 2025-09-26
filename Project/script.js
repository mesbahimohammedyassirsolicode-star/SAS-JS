const skills = {
    "Maquetter une application": "C1",
    "Réaliser une interface utilisateur web statique et adaptable": "C2",
    "Développer une interface utilisateur web dynamique": "C3",
    "Créer une base de données - niveau 1": "C5",
    "Développer les composants d’accès aux données - niveau 1": "C6",
    "Développer la partie back-end d’une application web ou web mobile - niveau 1": "C7",
    "Réaliser une interface utilisateur avec une solution de gestion de contenu ou e-commerce": "C8",
    "Réaliser une interface utilisateur avec une solution de gestion de contenu ou e-commerce (duplicate)": "C4",
    "Comprendre la démarche pédagogique à Solicode": "T1",
    "Collaboration & posture professionnelle": "T2",
    "Gérer un projet avec Git & GitHub": "T3"
};

const skillEntries = Object.entries(skills);

let score = 0;
const maxAttempts = 10;

for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    const randomIndex = Math.floor(Math.random() * skillEntries.length);
    const [skillName, skillCode] = skillEntries[randomIndex];

    const userAnswer = prompt(`Attempt ${attempt}/${maxAttempts}:\nWhat is the code for "${skillName}"?`);

    if (userAnswer === skillCode) {
        alert("Correct! 🎉");
        score++;
    } else {        
    
        alert(`Incorrect. The correct code is "${skillCode}".`);
    }
}
alert(`Game over! Your final score is: ${score}/${maxAttempts}`)
if (score > 5) {
    alert("good job");
} else {
    alert("Try again next time!");
}