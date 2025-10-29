let bibliotheque = [
    {code: 1, title: "A Song of Ice and Fire", author: "gorge martin", year: 1996, disponible: true, price: "100dh", image: "images/ice-song-and-fire.jpg"},
    {code: 2, title: "the prince", author: "Niccolo Machiavelli", year: 1532, disponible: true, price: "99dh", image: "images/the-prince.jpg"},
    {code: 3, title: "beyond good and devil", author: "Friedrich Nietzsche", year: 1886, disponible: false, price: "200dh", image: "images/beyond-good-and-evil.jpg"},
    {code: 4, title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937, disponible: true, price: "150dh", image: "images/the-hobbit.jpg"},
    {code: 5, title: "The Lord of the Rings", author: "J.R.R. Tolkien", year: 1954, disponible: false, price: "150dh", image: "images/the-lord-of-the-rings.jpg"},
    {code: 6, title: "Thus Spoke Zarathustra", author: "Friedrich Nietzsche", year: 1883, disponible: true, price: "150dh", image: "images/thus-spoke-zarathustra.jpg"},
    {code: 7, title: "Animal Farm", author: "George Orwel", year: 1945, disponible: true, price: "200dh", image: "images/animal-farm.jpg"},
    {code: 8, title: "the interpretation of dreams", author: "Sigmund Freud", year: 1899, disponible: false, price: "250dh", image: "images/the-interpretation-of-dreams-50_900x.webp"},
    {code: 9, title: "The Muqaddimah", author: "Ibn Khaldun", year: 1377, disponible: true, price: "300dh", image: "images/the-muqaddimah.jpg"}
];
//displaying books
let databooks = document.querySelector(".databook");
bibliotheque.forEach(book => {
    let card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = ` 
        <div class="book-img" style="background-image: url('${book.image}')"></div>
        <h2>${book.title}</h2>
        <p><strong>Auteur:</strong> ${book.author}</p>
        <p><strong>Année:</strong> ${book.year}</p>
        <p><strong>Disponible:</strong> ${book.disponible ? "Oui" : "Non"}</p>
        <p><strong>Prix:</strong> ${book.price}</p>
        <p><strong>code:</strong>${book.code}</p>
        <button class="btn-supprimer">Supprimer</button>`;
    let btnsupprimer = card.querySelector(".btn-supprimer");
    btnsupprimer.addEventListener("click", function() {
        card.remove();
    });
   if(databooks){
databooks.appendChild(card);
   } ;
});
//statistics
function totalbooks() {
    let total=0;
    for (let i = 0; i < bibliotheque.length; i++) {
        total = total + 1;
    }
    return total;
    }
    function nombreLivresDisponibles() {
    let disponibles = 0;
    
    for (let i = 0; i < bibliotheque.length; i++) {
        if (bibliotheque[i].disponible === true) {
            disponibles = disponibles + 1;
        }
    }
    return disponibles;


}
//total books
let total=document.querySelector(`.stat-number`);
total.innerHTML=bibliotheque.length; 

let disponible=document.getElementById("availableBooks");
disponible.innerHTML=nombreLivresDisponibles();
//serching bar
let searchbar = document.getElementById('searchInput');

function searchBooks() {
    let value = searchbar.value.trim().toLowerCase();
    let allCards = document.querySelectorAll(".card");
    
    for (let i = 0; i < bibliotheque.length; i++) {
        let title = bibliotheque[i].title.trim().toLowerCase();
        let card = allCards[i];
        
        if (value === '' || title.includes(value)) {
            card.style.display = 'block';
            card.classList.add("founded");
        } else {
            card.style.display = 'none';
            card.classList.remove("founded");
        }
    }
}

searchbar.addEventListener("change", searchBooks);