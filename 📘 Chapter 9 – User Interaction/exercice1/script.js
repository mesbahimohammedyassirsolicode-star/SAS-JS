let todolist=document.getElementById("todolist");

function todolistadd(){
    
    let todoinput=document.getElementById("todoinput");
    let li=document.createElement("li");
    let input =todoinput.value
    li.innerText=input;
  if(input){
     todolist.appendChild(li);
  }
   
   
}
let add = document.getElementById("add")
add.addEventListener("click",function(){
todolistadd()
}
)