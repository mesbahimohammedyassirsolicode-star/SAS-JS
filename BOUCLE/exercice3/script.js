let x = prompt("Entrez un nombre :");
let diviseurs = "";

for (let i = 1; i <= x; i++) {
    if (x % i === 0) {
        diviseurs += i + ",";
    }
}

alert("Les diviseurs de X=" + x + " :");
alert(diviseurs.slice(0, -1));