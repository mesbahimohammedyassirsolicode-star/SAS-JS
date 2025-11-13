let bibliotheque = JSON.parse(sessionStorage.getItem('bibliotheque'));
let sortAscending = true;

// Initialize library ONLY if empty
if (!bibliotheque || bibliotheque.length === 0) {
    bibliotheque = [
        {code: 1, title: "A Song of Ice and Fire", author: "George R. R. Martin", year: 1996, disponible: true, price: "100dh", image: "images/ice-song-and-fire.jpg"},
        {code: 2, title: "the prince", author: "Niccolo Machiavelli", year: 1532, disponible: true, price: "99dh", image: "images/the-prince.jpg"},
        {code: 3, title: "beyond good and devil", author: "Friedrich Nietzsche", year: 1886, disponible: false, price: "200dh", image: "images/beyond-good-and-evil.jpg"},
        {code: 4, title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937, disponible: true, price: "150dh", image: "images/the-hobbit.jpg"},
        {code: 5, title: "The Lord of the Rings", author: "J.R.R. Tolkien", year: 1954, disponible: false, price: "150dh", image: "images/the-lord-of-the-rings.jpg"},
        {code: 6, title: "Thus Spoke Zarathustra", author: "Friedrich Nietzsche", year: 1883, disponible: true, price: "150dh", image: "images/thus-spoke-zarathustra.jpg"},
        {code: 7, title: "Animal Farm", author: "George Orwel", year: 1945, disponible: true, price: "200dh", image: "images/animal-farm.jpg"},
        {code: 8, title: "the interpretation of dreams", author: "Sigmund Freud", year: 1899, disponible: false, price: "250dh", image: "images/the-interpretation-of-dreams-50_900x.webp"},
        {code: 9, title: "The Muqaddimah", author: "Ibn Khaldun", year: 1377, disponible: true, price: "300dh", image: "images/the-muqaddimah.jpg"}
    ];
    saveLibrary();
}

// Function to save library to sessionStorage
function saveLibrary() {
    sessionStorage.setItem('bibliotheque', JSON.stringify(bibliotheque));
}

// Function to display books
function displayBooks() {
    let databooks = document.querySelector(".databook");
    if (!databooks) return;
    
    databooks.innerHTML = '';
    
    for (let i = 0; i < bibliotheque.length; i++) {
        let book = bibliotheque[i];
        let card = document.createElement("div");
        card.classList.add("card");
        
        // Create availability label
        let availabilityHTML = book.disponible ? 
            '<span class="available-label">Disponible</span>' : 
            '<span class="reserved-label">Réservé</span>';
        
        card.innerHTML = ` 
            <div class="book-img" style="background-image: url('${book.image}')"></div>
            <h2>${book.title}</h2>
            <p><strong>Auteur:</strong> ${book.author}</p>
            <p><strong>Année:</strong> ${book.year}</p>
            <p><strong>Prix:</strong> ${book.price}</p>
            <p><strong>Code:</strong> ${book.code}</p>
            ${availabilityHTML}
            <button class="btn-supprimer" onclick="deleteBook(${book.code})">Supprimer</button>`;
        
        databooks.appendChild(card);
    }
    
    updateStatistics();
    updateMostExpensiveBook();
}

// Function to delete a book
function deleteBook(code) {
    if (confirm("Êtes-vous sûr de vouloir supprimer ce livre ?")) {
        let newBibliotheque = [];
        for (let i = 0; i < bibliotheque.length; i++) {
            if (bibliotheque[i].code !== code) {
                newBibliotheque.push(bibliotheque[i]);
            }
        }
        bibliotheque = newBibliotheque;
        saveLibrary();
        displayBooks();
    }
}

// Function to update statistics
function updateStatistics() {
    let totalElement = document.getElementById("totalBooks");
    let disponibleElement = document.getElementById("availableBooks");
    
    if (totalElement) {
        totalElement.innerHTML = bibliotheque.length;
    }
    
    if (disponibleElement) {
        let disponibles = 0;
        for (let i = 0; i < bibliotheque.length; i++) {
            if (bibliotheque[i].disponible) {
                disponibles++;
            }
        }
        disponibleElement.innerHTML = disponibles;
    }
}

// Function to sort books
function sortBooks() {
    for (let i = 0; i < bibliotheque.length - 1; i++) {
        for (let j = 0; j < bibliotheque.length - i - 1; j++) {
            let shouldSwap = sortAscending ? 
                bibliotheque[j].title > bibliotheque[j + 1].title : 
                bibliotheque[j].title < bibliotheque[j + 1].title;
            
            if (shouldSwap) {
                let temp = bibliotheque[j];
                bibliotheque[j] = bibliotheque[j + 1];
                bibliotheque[j + 1] = temp;
            }
        }
    }
    
    sortAscending = !sortAscending;
    saveLibrary();
    displayBooks();
}

// Function to find and display most expensive book
function updateMostExpensiveBook() {
    if (bibliotheque.length === 0) return;
    
    let mostExpensive = bibliotheque[0];
    for (let i = 1; i < bibliotheque.length; i++) {
        let currentPrice = parseInt(bibliotheque[i].price);
        let maxPrice = parseInt(mostExpensive.price);
        if (currentPrice > maxPrice) {
            mostExpensive = bibliotheque[i];
        }
    }

    let expensiveTitle = document.getElementById('expensiveBookTitle');
    if (expensiveTitle) {
        expensiveTitle.textContent = `${mostExpensive.title} (${mostExpensive.price})`;
    }
}

// Search functionality
function setupSearch() {
    let searchbar = document.getElementById('searchInput');
    if (!searchbar) return;
    
    searchbar.addEventListener("input", function() {
        let value = this.value.trim().toLowerCase();
        let allCards = document.querySelectorAll(".card");
        
        for (let i = 0; i < allCards.length; i++) {
            let card = allCards[i];
            let title = card.querySelector('h2').textContent.toLowerCase();
            if (title.includes(value)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        }
    });
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', function() {
    displayBooks();
    setupSearch();
    
    let sortButton = document.getElementById('sortButton');
    if (sortButton) {
        sortButton.addEventListener('click', sortBooks);
    }
});