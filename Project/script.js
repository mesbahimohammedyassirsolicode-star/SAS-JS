const competences = [
    "Maquetter une application",
    "Réaliser une interface utilisateur web statique et adaptable",
    "Développer une interface utilisateur web dynamique",
    "Réaliser une interface utilisateur avec une solution de gestion de contenu ou e-commerce",
    "Créer une base de données - niveau 1",
    "Développer les composants d’accès aux données - niveau 1",
    "Développer la partie back-end d’une application web ou web mobile - niveau 1",
    "Framwork FrontEnd (React, vueJs...)",
    "Comprendre la démarche pédagogique à Solicode",
    "Collaboration & posture professionnelle"
  ];
  let score = 0;
  let result = 10;
  let i = 1;
  while (i <= result)
  {
      let index = Math.floor(Math.random() * competences.length);
      let correctCode = "C" + (index + 1);
      let answer = prompt("Question " + i + ":\n what the code for this skill  :\n" + competences[index]);
      if (!answer)
      {
          alert("GOOD BYE");
          break;
      }

      if (answer == correctCode) 
      {
          alert("true! 🎉");
          score++;
      } 
      else 
      {
          alert("FALSE, The correct answer is: " + correctCode);
      }
      i++;
  }

  alert("\n🏁 GAME OVER !");
  alert("YOUR score: " + score + " / " + result);