let displayValue = "";

function appendToDisplay(value) {
    displayValue += value;
    document.getElementById("display").value = displayValue;
}

function clearDisplay() {
    displayValue = "";
    document.getElementById("display").value = displayValue;
}

function calculate(operator) {
    if (operator === "=") {
        try {
            displayValue = eval(displayValue); // Use with caution!  See notes below.
        } catch (error) {
            displayValue = "Error";
        }
    } else {
        displayValue += operator;
    }
    document.getElementById("display").value = displayValue;
}