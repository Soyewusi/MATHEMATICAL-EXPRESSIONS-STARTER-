function calculate() {
    // Get the values from the inputs
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let operator = document.getElementById("operator").value;

    // Variable to hold the result
    let result;

    // Ensure both numbers are entered
    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById("result").innerText = "Please enter both numbers.";
        return;
    }

    // Perform the calculation based on the selected operator
    switch (operator) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            if (num2 === 0) {
                document.getElementById("result").innerText = "Cannot divide by zero.";
                return;
            }
            result = num1 / num2;
            break;
        case "**":
            result = Math.pow(num1, num2); // Exponentiation (num1 raised to the power of num2)
            break;
        case "%":
            result = num1 % num2; // Modulo
            break;
        default:
            document.getElementById("result").innerText = "Invalid operator.";
            return;
    }

    // Display the result
    document.getElementById("result").innerText = `Result: ${num1} ${operator} ${num2} = ${result}`;
}