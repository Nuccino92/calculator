
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
let number1 = 0;
let number2 = 0;
let action = '';

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


function operate(action, number1, number2) {
    if (action === '+') {
        return add(number1, number2)
    }
    else if (action === '-') {
        return subtract(number1, number2)
    }
    else if (action === '*') {
        return multiply(number1, number2)
    }
    else (action === '÷')
        return divide(number1, number2)
    
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
        number1 = parseFloat(current);
    })
});

operator.forEach(operator => {
    operator.addEventListener('click', (e) => {
        if (!current) return;
        decimal = false;
        
        action = e.target.innerText;
        current += e.target.innerText;
        currentDisplay.innerText = current;

        moveText();
        calculate();
        
    })
})
    function moveText() {
        previous += current+ ' ';
        previousDisplay.innerText = previous;
        currentDisplay.innerText = '';
        current = '';
    }
    function calculate() {
    
    
    
    
        //    console.log(operate(action, number1, 10));  <----- it works
      
    }
    clear.addEventListener('click', (e) => {
        currentDisplay.innerText = '';
        current = '';
        previousDisplay.innerText = '';
        previous = '';
        operation = null;
        decimal = null;
    })
