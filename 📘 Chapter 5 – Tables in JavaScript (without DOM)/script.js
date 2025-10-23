//1.creation a table of books
let books = [
        {title:"ice song and fire",author:"gorge martin",price:100 },
        {title:"the prince",author:"Niccolo Machiavelli" , price:99},
        {title:"beyond good and devil ",author:"Friedrich Nietzsche",price:200},
        {title:"The Hobbit", author: "J.R.R. Tolkien", price: 150 },
        {title:"The Lord of the Rings", author: "J.R.R. Tolkien", price: 150 },

] 
//2.booklist 
function bookslist(books){
  console.log("---The books list---");
  for (let i=0;i< books.length ; i++ )
    console.log(books[i]);
    
  
}
//3.showonlytitles
function showTitlesOnly(books) {
 console.log("----BOOK TITLES ONLY----");
 for (let i =0 ;i< books.length;i++)
  console.log(books[i].title);
} 
//4.count the price
function count() {
  console.log("---total price---"); 
  let count=0; 
for (let i=0;i< books.length;i++){
count+=books[i].price;
}
console.log(count);
}
//5.show only overprice100
function overprice(books) {
  console.log("---the books over 100");
  for (let i=0;i<books.length;i++){
 if (books[i].price>=100){
    console.log(books[i].title);
}
  }
 
  }
books.push({title:"fire and blood",author:"gorge martin",price:149})
bookslist(books);
showTitlesOnly(books);
count();
overprice(books);
