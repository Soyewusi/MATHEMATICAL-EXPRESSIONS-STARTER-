function calculate() {
    // Get the values from the inputs
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let operator = document.getElementById("operator").value;

    // Variable to hold the result
    let result;
    let comparisonResult;
    let explanation;

    // Ensure both numbers are entered
    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById("result").innerText = "Please enter both numbers.";
        return;
    }

    // Perform the calculation or comparison based on the selected operator
    switch (operator) {
        case "+":
            result = num1 + num2;
            explanation = `Adding ${num1} and ${num2}.`;
            break;
        case "-":
            result = num1 - num2;
            explanation = `Subtracting ${num2} from ${num1}.`;
            break;
        case "*":
            result = num1 * num2;
            explanation = `Multiplying ${num1} and ${num2}.`;
            break;
        case "/":
            if (num2 === 0) {
                document.getElementById("result").innerText = "Cannot divide by zero.";
                return;
            }
            result = num1 / num2;
            explanation = `Dividing ${num1} by ${num2}.`;
            break;
        case "**":
            result = Math.pow(num1, num2);
            explanation = `${num1} raised to the power of ${num2}.`;
            break;
        case "%":
            result = num1 % num2;
            explanation = `Modulo of ${num1} by ${num2}.`;
            break;
        case ">":
            comparisonResult = num1 > num2;
            explanation = `${num1} > ${num2}: ${comparisonResult}`;
            break;
        case "<":
            comparisonResult = num1 < num2;
            explanation = `${num1} < ${num2}: ${comparisonResult}`;
            break;
        case "!=":
            comparisonResult = num1 !== num2;
            explanation = `${num1} !== ${num2}: ${comparisonResult}`;
            break;
        default:
            document.getElementById("result").innerText = "Invalid operator.";
            return;
    }

    // Display the result or comparison details
    if (comparisonResult !== undefined) {
        document.getElementById("result").innerText = `Comparison: ${explanation}`;
    } else {
        document.getElementById("result").innerText = `Result: ${result}. ${explanation}`;
    }
}