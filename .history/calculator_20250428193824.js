// Получаем элемент дисплея
const display = document.getElementById("display");

// Переменные для хранения данных
let firstNumber = "";
let operator = "";
let newNumber = false;

// Добавление цифры
function addNumber(num) {
  if (newNumber) {
    display.value = num;
    newNumber = false;
  } else {
    display.value += num;
  }
}

// Добавление операции
function addOperation(op) {
  if (display.value !== "") {
    firstNumber = display.value;
    operator = op;
    newNumber = true;
  }
}

// Вычисление результата
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

// Очистка дисплея
function clearDisplay() {
  display.value = "";
  firstNumber = "";
  operator = "";
  newNumber = false;
}
