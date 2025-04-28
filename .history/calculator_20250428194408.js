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
  // Проверяем, что есть число для операции
  if (display.value === "") {
    display.value = "Ошибка: введите число";
    return;
  }
  // Если уже есть операция, выполняем её
  if (firstNumber && operator) {
    calculate();
  }
  firstNumber = display.value;
  operator = op;
  newNumber = true;
}

// Вычисление результата
function calculate() {
  // Проверяем наличие всех необходимых данных
  if (!firstNumber || !operator || !display.value) {
    display.value = "Ошибка: неполное выражение";
    return;
  }

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
        display.value = "Ошибка: деление на ноль";
        firstNumber = "";
        operator = "";
        newNumber = true;
        return;
      }
      result = a / b;
      break;
  }

  display.value = result;
  firstNumber = "";
  operator = "";
  newNumber = true;
}

// Очистка дисплея
function clearDisplay() {
  display.value = "";
  firstNumber = "";
  operator = "";
  newNumber = false;
}
