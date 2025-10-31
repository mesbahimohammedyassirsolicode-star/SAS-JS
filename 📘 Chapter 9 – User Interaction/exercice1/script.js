let todolist=document.getElementById("todolist");

function todolistadd(){
    
    let todoinput=document.getElementById("todoinput");
    let input =todoinput.value
      if(input){ 
    let li=document.createElement("li");
    
    
    li.innerText=input;
    
     todolist.appendChild(li);
  }
}
let add = document.getElementById("add")
add.addEventListener("click",function(){
todolistadd()
}
)