let previousDisplay = document.querySelector('.previous-display');
let currentDisplay = document.querySelector('.current-display');
let number = document.querySelectorAll('.number');
let operator = document.querySelectorAll('.operator');
let clear = document.getElementById('clear');
let plusMinus = document.getElementById('plus-minus');
let back = document.getElementById('back');
let float = document.getElementById('float');
let equals = document.getElementById('equals');

let displayValue = '';
let total = 0;
let currentNumber = 0;
let decimal = false;
let action = '';

function add(a, b) {
    return a + b
};
function subtract(a, b) {
    return a - b
};
function multiply(a, b) {
    return a * b
};
function divide(a, b) {
    return a / b
};


function operate(action, a, b) {
    if (action === '+') {
        return add(a, b)
    }
    else if (action === '-') {
        return subtract(a, b)
    }
    else if (action === '×') {
        return multiply(a, b)
    }
    else (action === '÷')
        return divide(a, b)  
};

        number.forEach(number => {
            number.addEventListener('click', (e) => {
                if (currentDisplay.innerText == '.') {
                    return;
                }
                
                currentDisplay.innerText += e.target.innerText;
                displayValue = currentDisplay.innerText;
                       
                if (currentDisplay.innerText && previousDisplay.innerText) {
                    currentNumber = parseFloat(displayValue);   
                    
                }
            })    
        })

    function getOperator() {
        operator.forEach(operator => {
            operator.addEventListener('click', (e) => {
                if (!displayValue) return;
                if (currentDisplay.innerText && previousDisplay.innerText) {
                    operateCalc();
                }
                previousDisplay.innerText = e.target.innerText;
                action = previousDisplay.innerText;

                moveText();
            })      
        })
    }
getOperator();

    function moveText() {
        previousDisplay.innerText = currentDisplay.innerText + ' ' + action;
        currentDisplay.innerText = '';
        total = parseFloat(displayValue);
        displayValue = '';  
      }   
   
   function clearButton() {
        clear.addEventListener('click', (e) => {
            currentDisplay.innerText = '';
            displayValue = '';
            total = 0;
            previousDisplay.innerText = '';
            action = '';
            currentNumber = 0;
        })
    }
clearButton()
    
    function equalsButton() {
        equals.addEventListener('click', (e) => {
            if (!currentDisplay.innerText || !previousDisplay.innerText) {
                return;
            }
            else {
                operate(action, total, currentNumber);
                previousDisplay.innerText = `${total} ${action} ${currentNumber}`;
                currentDisplay.innerText = (operate(action, total, currentNumber)) + ' ';
            
                displayValue = currentDisplay.innerText;
                total = parseFloat(displayValue);
        
                console.log(action, total, currentNumber)
            }
        })
    }
equalsButton()

    function operateCalc() {
        operate(action, total, currentNumber);
                previousDisplay.innerText = `${total} ${action} ${currentNumber}`;
                currentDisplay.innerText = (operate(action, total, currentNumber)) + ' ';
            
                displayValue = currentDisplay.innerText;
                total = parseFloat(displayValue);
        
                console.log(action, total, currentNumber)
    }


// function back() {

    // }

    
    // function plusMinus() {

    // }