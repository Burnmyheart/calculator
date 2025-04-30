const display = document.getElementById("display");

let firstNumber = "";
let operator = "";
let secondNumber = "";
let isResultShown = false;

function updateDisplay() {
  display.value = `${firstNumber}${operator}${secondNumber}`;
}

function addNumber(num) {
  if (isResultShown) {
    firstNumber = "";
    operator = "";
    secondNumber = "";
    isResultShown = false;
  }

  if (!operator) {
    if (num === "." && firstNumber.includes(".")) return;
    firstNumber += num;
  } else {
    if (num === "." && secondNumber.includes(".")) return;
    secondNumber += num;
  }

  updateDisplay();
}

function addOperation(op) {
  if (isResultShown) {
    isResultShown = false;
    operator = op;
    secondNumber = "";
    updateDisplay();
    return;
  }

  if (firstNumber && !operator) {
    operator = op;
    updateDisplay();
  }
}

function calculate() {
  if (firstNumber && operator && secondNumber) {
    const a = parseFloat(firstNumber);
    const b = parseFloat(secondNumber);
    let result;

    switch (operator) {
      case "+":
        result = a + b;
        break;
      case "-":
        result = a - b;
        break;
      case "*":
        result = a * b;
        break;
      case "/":
        result = b === 0 ? "Ошибка" : a / b;
        break;
    }

    display.value = result;
    firstNumber = result.toString();
    operator = "";
    secondNumber = "";
    isResultShown = true;
  }
}

function clearDisplay() {
  firstNumber = "";
  operator = "";
  secondNumber = "";
  isResultShown = false;
  display.value = "";
}

document.addEventListener("keydown", function (event) {
  if (/[0-9.]/.test(event.key)) {
    addNumber(event.key);
  } else if (["+", "-", "*", "/"].includes(event.key)) {
    addOperation(event.key);
  } else if (event.key === "=" || event.key === "Enter") {
    calculate();
  } else if (event.key === "Escape" || event.key === "Delete") {
    clearDisplay();
  } else if (event.key === "Backspace") {
    if (secondNumber) {
      secondNumber = secondNumber.slice(0, -1);
    } else if (operator) {
      operator = "";
    } else {
      firstNumber = firstNumber.slice(0, -1);
    }
    updateDisplay();
  }
});
