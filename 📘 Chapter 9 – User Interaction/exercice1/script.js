let todolist=document.getElementById("todolist");

function todolistadd(){
    
    let todoinput=document.getElementById("todoinput");
      if(input){
    let li=document.createElement("li");
    let input =todoinput.value
    
    li.innerText=input;

     todolist.appendChild(li);
  }
}
let add = document.getElementById("add")
add.addEventListener("click",function(){
todolistadd()
}
)