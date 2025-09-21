
let number1 = prompt("Enter the first number:"));
let number2 = prompt("Enter the second number:"));

let operator = prompt("Enter an operator (+, -, *, /):");

let result; // We declare a variable to store the result.

switch (operator) {
    case '+':
        result = number1 + number2;
        break; // 'break' stops the execution of the switch.

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
alert("Result: " + result);
