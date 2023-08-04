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

    appendNumber(number) {
        //
        if(number === '.' && this.currentOperand.includes('.')) {
            return;
        }
        this.currentOperand = this.currentOperand.toString() + number.toString();
    }

    chooseOperation(operation) {
        //
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

        //
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

        //
        this.currentOperand = computation;
        this.operation = undefined;
        this.previousOperand = '';
    }


    updateDisplay() {
        this.currentOperandText.innerText = this.currentOperand;
        if (this.operation != null){
            this.previousOperandText.innerText = this.previousOperand + ' '  + this.operation;
        }
    }
}


const numberButtons = document.querySelectorAll(`[data-number]`);
const operationButtons =document.querySelectorAll(`[data-operation]`);
const equalsButton = document.querySelector(`[data-equals]`);
const allClearButton = document.querySelector(`[data-all-clear]`);
const deleteButton = document.querySelector(`[data-delete]`);
const previousOperandText = document.querySelector(`[data-previous-operand]`);
const currentOperandText = document.querySelector(`[data-current-operand]`);

const calculator = new Calculator(previousOperandText,currentOperandText);

//
numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText);
        calculator.updateDisplay();
    })
});

//
operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText);
        calculator.updateDisplay();
    })
});

//
equalsButton.addEventListener('click', button => {
    calculator.compute();
    calculator.updateDisplay();
});

//
allClearButton.addEventListener('click', button => {
    calculator.clear();
    calculator.updateDisplay();
});

//
deleteButton.addEventListener('click', button => {
    calculator.delete();
    calculator.updateDisplay();
});