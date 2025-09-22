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
        // Convert input to numbers
        number1 = Number(number1);
        number2 = Number(number2);

        switch (operator) {
            case '+':
                result = number1 + number2;
                break; 
            case '-':
                result = number1 - number2;
                break;

            case '*':
                result = number1 * number2;
                break;

            case '/':
                if (number2 === 0) {
                    result = "Division by zero is forbidden!";
                } else {
                    result = number1 / number2;
                }
                break;

            default:
                result = "Invalid operator. Please choose from +, -, *, /.";
                break;
        }
        continueInput = false;
    }
    alert("Result: " + result);
}