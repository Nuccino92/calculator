let previousDisplay = document.querySelector('.previous-display');
let currentDisplay = document.querySelector('.current-display');
let totalDisplay = document.querySelector('.total-display');
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
let action = '';


function add(a, b) {  // math functions
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

function operate(action, a, b) {  // function to select the math solution
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
                if (e.target.innerText == '.' && currentDisplay.innerText.includes('.')) {return};
                
                if(currentDisplay.innerText.length > 10) {
                    currentDisplay.innerText = currentDisplay.innerText.substring(0,10);}
                
                currentDisplay.innerText += e.target.innerText;
                displayValue = currentDisplay.innerText;
                 
                if (currentDisplay.innerText && previousDisplay.innerText) {
                    currentNumber = parseFloat(displayValue);}              
            })           
        })
 
    function getOperator() {
        operator.forEach(operator => {
            operator.addEventListener('click', (e) => {
                if (!displayValue) return;
                if (currentDisplay.innerText && previousDisplay.innerText) {
                    operateCalc(); }
                
                previousDisplay.innerText = e.target.innerText;
                action = previousDisplay.innerText;

                moveText();
            })      
        })
    };
getOperator();

    function moveText() {
        previousDisplay.innerText = currentDisplay.innerText + ' ' + action;
        total = parseFloat(displayValue);
        currentDisplay.innerText = '';
        displayValue = '';
      };  
       
    function equalsButton() {
        equals.addEventListener('click', (e) => {        
            if (!currentDisplay.innerText || !previousDisplay.innerText) {return}
            if (action == '÷' && currentNumber == 0 && total == 0) {
                currentDisplay.innerText = "Press clear :)";
            }
            else {
                operate(action, total, currentNumber);
                previousDisplay.innerText = `${total} ${action} ${currentNumber}`;
                totalDisplay.innerText = (operate(action, total, currentNumber)) + ' ';
                currentDisplay.innerText = (operate(action, total, currentNumber)) + ' ';
            }
        })
    };
equalsButton();

    function operateCalc() {
        operate(action, total, currentNumber);
                previousDisplay.innerText = (operate(action, total, currentNumber)) + ' ';
                currentDisplay.innerText = (operate(action, total, currentNumber)) + ' ';
                totalDisplay.innerText = (operate(action, total, currentNumber)) + ' ';
                displayValue = currentDisplay.innerText;
                total = parseFloat(displayValue);
                
                if (action == '÷' && currentNumber == 0 && total == 0) {
                    currentDisplay.innerText = "Press clear :)";
                }
    };

    function clearButton() {
        clear.addEventListener('click', (e) => {
            currentDisplay.innerText = '';
            displayValue = '';
            total = 0;
            previousDisplay.innerText = '';
            action = '';
            currentNumber = 0;
            totalDisplay.innerText = '';
        })
    };
clearButton();

        back.addEventListener('click', (e) => {      
            currentDisplay.innerText = currentDisplay.innerText.substring(0, currentDisplay.innerText.length -1);
            displayValue = currentDisplay.innerText; 
            currentNumber = parseFloat(displayValue);         
        });

    
        plusMinus.addEventListener('click', (e) => {
                currentNumber = parseFloat(displayValue);

                if (currentNumber > 0) {
                    currentNumber =  currentNumber - currentNumber - currentNumber;
                    displayValue = currentNumber;
                    currentDisplay.innerText = displayValue;
                }
        });