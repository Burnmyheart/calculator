const display = document.getElementById("display");

let firstNumber = "";
let operator = "";
let newNumber = false;

function addNumber(num) {
  if (newNumber) {
    display.value = num;
    newNumber = false;
  } else {
    display.value += num;
  }
}

function addOperation(op) {
  if (display.value !== "") {
    firstNumber = display.value;
    operator = op;
    newNumber = true;
  }
}

function calculate() {
  if (firstNumber && operator && display.value) {
    let result;
    let a = parseFloat(firstNumber);
    let b = parseFloat(display.value);

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
        if (b === 0) {
          result = "Ошибка";
        } else {
          result = a / b;
        }
        break;
    }

    display.value = result;
    firstNumber = "";
    operator = "";
    newNumber = true;
  }
}

function clearDisplay() {
  display.value = "";
  firstNumber = "";
  operator = "";
  newNumber = false;
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
    display.value = display.value.slice(0, -1);
  }
});
