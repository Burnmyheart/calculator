// Получаем элемент дисплея
const display = document.getElementById("display");

// Переменные для хранения чисел и операции
let firstNumber = "";
let operation = "";
let newNumber = false;

// Функция добавления цифры
function addNumber(num) {
  if (newNumber) {
    display.value = num;
    newNumber = false;
  } else {
    display.value += num;
  }
}

// Функция добавления операции
function addOperation(op) {
  // Проверяем, что первое число введено
  if (display.value !== "") {
    firstNumber = display.value;
    operation = op;
    newNumber = true;
  }
}

// Функция вычисления результата
function calculate() {
  // Проверяем, что у нас есть все необходимые значения
  if (firstNumber !== "" && operation !== "" && display.value !== "") {
    let result;
    const secondNumber = display.value;

    // Выполняем операцию
    switch (operation) {
      case "+":
        result = parseFloat(firstNumber) + parseFloat(secondNumber);
        break;
      case "-":
        result = parseFloat(firstNumber) - parseFloat(secondNumber);
        break;
      case "*":
        result = parseFloat(firstNumber) * parseFloat(secondNumber);
        break;
      case "/":
        if (secondNumber !== "0") {
          result = parseFloat(firstNumber) / parseFloat(secondNumber);
        } else {
          result = "Ошибка";
        }
        break;
    }

    // Выводим результат
    display.value = result;

    // Сбрасываем значения
    firstNumber = "";
    operation = "";
    newNumber = true;
  }
}

// Функция очистки
function clearDisplay() {
  display.value = "";
  firstNumber = "";
  operation = "";
  newNumber = false;
}
