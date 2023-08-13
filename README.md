# simple-calculator

## Description
The "Simple Calculator" Web App is a simple calculator application built using HTML, CSS, and JavaScript. It allows users to perform basic arithmetic operations and provides a user-friendly interface for calculations.

## Features
- Perform addition, subtraction, multiplication, and division operations.
- Clear the current calculation and start a new one.
- Delete the last entered digit.
- Display both the current operand and the previous operand with the selected operation.
- Format numbers for better readability.

## JavaScript Concepts

### Class and Constructor
The `Calculator` class is used to create calculator objects. It has methods to perform calculations, handle user input, and update the display.
```javascript
class Calculator {
    constructor(previousOperandText, currentOperandText) {
        // ...
    }

    clear() {
        // ...
    }

    delete() {
        // ...
    }

    appendNumber(number) {
        // ...
    }

    chooseOperation(operation) {
        // ...
    }

    compute() {
        // ...
    }

    getDisplayNumber(number) {
        // ...
    }

    updateDisplay() {
        // ...
    }
}
```
### Event Handling
The calculator's functionality is based on event listeners for number buttons, operation buttons, and other controls.
```javascript
// Event listeners for number buttons
numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText);
        calculator.updateDisplay();
    })
});

// Event listeners for operation buttons
operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText);
        calculator.updateDisplay();
    })
});

// Event listener for the "=" button
equalsButton.addEventListener('click', button => {
    calculator.compute();
    calculator.updateDisplay();
});

// Event listener for the "AC" button
allClearButton.addEventListener('click', button => {
    calculator.clear();
    calculator.updateDisplay();
});

// Event listener for the "DEL" button
deleteButton.addEventListener('click', button => {
    calculator.delete();
    calculator.updateDisplay();
});
```
### Dom Manipulation
The updateDisplay method updates the display of the calculator with the current and previous operands.
```javascript
updateDisplay() {
    this.currentOperandText.innerText = this.getDisplayNumber(this.currentOperand);
    if (this.operation != null) {
        this.previousOperandText.innerText = this.getDisplayNumber(this.previousOperand) + ' ' + this.operation;
    } else {
        this.previousOperandText.innerText = '';
    }
}
```

## Usage
1. Open the index.html file in a web browser.
1. Use the number buttons to input digits for calculations.
1. Click on the operation buttons (+, -, *, or ÷) to select an operation.
1. Press the "=" button to compute the result.
1. Click the "AC" button to clear the current calculation.
1. Use the "DEL" button to delete the last entered digit.

