let display = document.getElementById("display");
let history = document.getElementById("history");
let currentInput = "";
let firstNumber = null;
let operator = null;
let newNumber = true;

function appendNumber(num) {
  if (newNumber) {
    display.value = num;
    newNumber = false;
  } else {
    display.value += num;
  }
  currentInput = display.value;
}

function appendOperator(op) {
  if (firstNumber === null) {
    firstNumber = parseFloat(currentInput);
    history.textContent = `${firstNumber} ${op}`;
  } else if (!newNumber) {
    calculate(true);
    history.textContent = `${firstNumber} ${op}`;
  }
  operator = op;
  newNumber = true;
}

function calculate(chainOperation = false) {
  if (operator === null || newNumber) return;

  let secondNumber = parseFloat(currentInput);
  let result;

  switch (operator) {
    case "+":
      result = firstNumber + secondNumber;
      break;
    case "-":
      result = firstNumber - secondNumber;
      break;
    case "*":
      result = firstNumber * secondNumber;
      break;
    case "/":
      if (secondNumber === 0) {
        display.value = "Error";
        history.textContent = "";
        firstNumber = null;
        operator = null;
        newNumber = true;
        return;
      }
      result = firstNumber / secondNumber;
      break;
  }

  display.value = result;
  firstNumber = result;
  newNumber = true;
}

function clearOutput() {
  display.value = "";
  currentInput = "";
  firstNumber = null;
  operator = null;
  newNumber = true;
}
