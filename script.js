class Calculator{
    constructor(previousOperandText, currentOperandText){
        this.previousOperandText = previousOperandText;
        this.currentOperandText = currentOperandText;
        this.clear();
    }

    clear() {
        this.currentOperand = '';
        this.previousOperand = '';
        this.operation = undefined;
    }

    delete() {
        // this line will slice all the characters in the string from the zero index to the second character from the end
        // so it will not select the last character in the end
        this.currentOperand = this.currentOperand.toString().slice(0, -1);
    }

    // when user clicks on number button this function will be called
    appendNumber(number) {
        //if the number user wants to input is '.' and there is already a dot in the current operand so return nothing
        if(number === '.' && this.currentOperand.includes('.')) {
            return;
        }
        this.currentOperand = this.currentOperand.toString() + number.toString();
    }

    chooseOperation(operation) {
        //when the user clicks on operation button without inputting any numbers
        if (this.currentOperand === '') {
            return;
        }
        // If the user clicked on operation when there is already a number in the previous section (and a number in the current section)
        // Then do the compute function to get the result of the first operation the proceed to the next operation
        if (this.previousOperand != ''){
            this.compute();
        }
        this.operation = operation;
        this.previousOperand = this.currentOperand.toString();
        this.currentOperand = '';
    }

    compute() {

        // The result pf our compute function
        let computation;

        // The number versions of previous and cuurent operands
        const prev = parseFloat(this.previousOperand);
        const current = parseFloat(this.currentOperand);

        // Check if there are no numbers, then return
        if (isNaN(prev) || isNaN(current)) {
            return;
        }

        // Mathematics Operations
        switch(this.operation) {
            case '+':
                computation = prev + current;
                break;
            case '-':
                computation = prev - next;
                break;              
            case '*':
                computation = prev * next;
                break;
            case '÷':
                computation = prev / next;
                break;
            default:
                return;

        }

        // The result of our computation will appear in the current operand section
        this.currentOperand = computation;

        // reset the operation and previous operand
        this.operation = undefined;
        this.previousOperand = '';
    }

    // formatting and displaying number in a user-friendly way 
    getDisplayNumber(number) {
        // convert the number to string to use the (split) function
        const stringNumber = number.toString();

        //get the left part of the number before the dot '.' => integer
        const integerDigits = parseFloat(stringNumber.split('.')[0]);

        //get the right part of the number after the dot '.' => decimal
        const decimalDigits = stringNumber.split('.')[1];

        // the string version of integerDigits
        let integerDisplay;
        if(isNaN(integerDigits)) {
            integerDisplay = '';
        } else {
            integerDisplay = integerDigits.toLocaleString('en' , {
                maximumFractionDigits: 0
            })
        }

        // seperate between integer digits and decimal digits by a dot '.'
        if (decimalDigits != null) {
            return `${integerDisplay}.${decimalDigits}`;
        } else {
            return `${integerDisplay}`;
        }
    }

    updateDisplay() {
        this.currentOperandText.innerText = this.getDisplayNumber(this.currentOperand);
        if (this.operation != null){
            this.previousOperandText.innerText = this.getDisplayNumber(this.previousOperand) + ' '  + this.operation;
        } else {
            this.previousOperandText.innerText = '';
        }
    }
}

// SELECTORS
const numberButtons = document.querySelectorAll(`[data-number]`);
const operationButtons =document.querySelectorAll(`[data-operation]`);
const equalsButton = document.querySelector(`[data-equals]`);
const allClearButton = document.querySelector(`[data-all-clear]`);
const deleteButton = document.querySelector(`[data-delete]`);
const previousOperandText = document.querySelector(`[data-previous-operand]`);
const currentOperandText = document.querySelector(`[data-current-operand]`);

const calculator = new Calculator(previousOperandText,currentOperandText);

// Numbers and dot '.'
numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText);
        calculator.updateDisplay();
    })
});

// Operations
operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText);
        calculator.updateDisplay();
    })
});

// = Button
equalsButton.addEventListener('click', button => {
    calculator.compute();
    calculator.updateDisplay();
});

// AC Button
allClearButton.addEventListener('click', button => {
    calculator.clear();
    calculator.updateDisplay();
});

// DEL Button
deleteButton.addEventListener('click', button => {
    calculator.delete();
    calculator.updateDisplay();
});