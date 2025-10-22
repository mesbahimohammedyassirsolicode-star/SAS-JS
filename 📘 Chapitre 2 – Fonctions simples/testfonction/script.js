function Max(nb1,nb2,nb3){
    if(nb1>=nb2 && nb1>=nb3) {
       return nb1;
    }
    else if(nb2>=nb1 && nb2>=nb3) {
       return nb2;
    }
    else{
        return nb3 ;
    }
}
let message=(20,40,600)
alert(message);
console.log(message)