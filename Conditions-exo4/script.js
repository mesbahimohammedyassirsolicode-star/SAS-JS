let continueInput = true;
while (continueInput) {
    let number1 = prompt("Enter the first number:");
    let number2 = prompt("Enter the second number:");

    let operator = prompt("Enter an operator (+, -, *, /):");

    let result; 
    if (number1 === null || number2 === null || operator === null) {
        alert("Operation cancelled.");
        result = "No result due to cancellation.";
        continueInput = false;
    } else {
<<<<<<< HEAD
        // Convert input to numbers
=======
>>>>>>> 24e946bb5e1ccca965296bb6747c64a8426dd51f
        number1 = Number(number1);
        number2 = Number(number2);

        switch (operator) {
            case "+":
                 
                result = number1 + number2;
                break; 
            case "-":
                result = number1 - number2;
                alert("result: " + result); 

                break;

            case "*":
                result = number1 * number2;
                alert("result: " + result);
                break;

            case "/":
                if (number2 === 0) {
                    result = "Division by zero is forbidden!";
                    alert(result);
                }  {
                    result = number1 / number2;
                    alert("result: " + result);
                }
                break;

            default:
                result = "Invalid operator. Please choose from +, -, *, /.";
                alert(result);
                break;
        }
        continueInput = false;
    }
    alert("Result: " + result);
}