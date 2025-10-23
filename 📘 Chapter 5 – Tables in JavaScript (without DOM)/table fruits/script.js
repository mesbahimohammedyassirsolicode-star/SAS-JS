let fruits = [{title:"apple",price:30},{title:"orange",price:20},{title:"banana",price:10},{title:"grape",price:25},{title:"mango",price:50}];

function fruitsList(fruits){
    console.log("---The fruits list---");
    for (let i=0;i< fruits.length ; i++ )
      console.log(fruits[i]);
        }
function showTitlesOnly(fruits) {
     console.log("----FRUITS TITLES ONLY----"); 
        for (let i =0 ;i< fruits.length;i++)
        console.log(fruits[i].title);
        }
function count() {
    console.log("---total price---");
    let count=0;
    for (let i=0;i< fruits.length;i++){
    count+=fruits[i].price;
    }
    console.log(count);
    }
function overprice(fruits) {
    console.log("---the fruits over 25");
    for (let i=0;i<fruits.length;i++){
        if (fruits[i].price>=25){
        console.log(fruits[i].title);
    }
    }
    }
fruits.push({title:"kiwi",price:35})
fruitsList(fruits);
showTitlesOnly(fruits);
count();
overprice(fruits);

