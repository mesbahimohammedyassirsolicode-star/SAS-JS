let title =document.getElementById("title");
let image=document.querySelector("img");
let button=document.querySelector(".btn");

button.addEventListener("click", function() {
  title.innerText = "Titre modifié !";
  title.classList.toggle("highlight");
  image.setAttribute("src", "photo.png");
  image.setAttribute("alt", "Nouvelle image");
});

