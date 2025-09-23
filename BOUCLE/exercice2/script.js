let somme = 0;
let count = 0;
let note;

while (true) {
    note = prompt("Entrez une note (-1 pour arrêter) :");
    if (note === -1) {
        break;
    }
    if (note < 0 || note > 20) {
        alert(note + " :Note non valide");
        continue;
    }
    somme += note;
    count++;
}

if (count > 0) {
    let moyenne = somme / count;
   alert("Nombre de notes=" + count + " ,moyenne=" + moyenne);
} else {
    alert("Aucune note valide saisie.");
}