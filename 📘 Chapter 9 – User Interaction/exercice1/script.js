let todolist = document.getElementById("todolist");
let add = document.getElementById("add");
let todoinput = document.getElementById("todoinput");

function todolistadd() {
    let input = todoinput.value.trim(); // trim() removes extra spaces
    
    if (input) { 
        let li = document.createElement("li");
        li.innerText = input;
        todolist.appendChild(li);
        
        // Clear the input field after adding
        todoinput.value = "";
    } else {
        alert("Please enter a task!");
    }
}

add.addEventListener("click", function() {
    todolistadd();
});

// Bonus: Allow adding with Enter key
todoinput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        todolistadd();
    }
});