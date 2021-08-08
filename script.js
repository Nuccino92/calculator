
let previousDisplay = document.querySelector('.previous-display');
let currentDisplay = document.querySelector('.current-display');
let number = document.querySelectorAll('.number');
let operator = document.querySelectorAll('.operator');
let clear = document.getElementById('clear');
let plusMinus = document.getElementById('plus-minus');
let back = document.getElementById('back');
let float = document.getElementById('float');
let equals = document.getElementById('equals');

let previous = '';
let current = '';
let decimal = false;
let operation = null;

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

number.forEach(number => {
    number.addEventListener('click', (e) => {
        if (e.target.innerText === '.' && !decimal){
            decimal = true;
        } else if (e.target.innerText === '.' && decimal){
            return;
        }
        current += e.target.innerText;
        currentDisplay.innerText = current;
        operation = parseFloat(current);
    })
});

operator.forEach(operator => {
    operator.addEventListener('click', (e) => {
        if (!current) return;
        decimal = false;
        
        current += e.target.innerText;
        currentDisplay.innerText = current;

        if (current.innerText = operator) {
            moveText();
            // calculate();
        }
    })
})

    clear.addEventListener('click', (e) => {
        currentDisplay.innerText = '';
        current = '';
        previousDisplay.innerText = '';
        previous = '';
        operation = null;
    })

    function moveText() {
        previous += current+ ' ';
        previousDisplay.innerText = previous;
        currentDisplay.innerText = '';
        current = '';
    }