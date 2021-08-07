function add(a, b) {
    return a + b
}

function subtract(a, b) {
    return a - b
}

function multiply(a, b) {
    return a * b
}

function divide(a, b) {
    return a / b
}

function operate(operator, operand1, operand2) {
    if (operator == '+') {
        return add(operand1, operand2)
    }
    else if (operator === '-') {
        return subtract(operand1, operand2)
    }
    else if (operator === '*') {
        return multiply(operand1, operand2)
    }
    else {
        return divide(operand1, operand2)
    }
}
