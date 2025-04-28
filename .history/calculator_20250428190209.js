const OPERATORS = {
  sum: "+",
  substrac: "-",
  multiply: "*",
  divide: "/",
};

function calculate({ a, b, operator }) {
  switch (operator) {
    case OPERATORS.sum:
      return a + b;
      break;

    case OPERATORS.substrac:
      return a - b;
      break;

    case OPERATORS.multiply:
      return a * b;
      break;

    case OPERATORS.divide:
      if (b === 0) return "Error: division by zero";
      return a / b;
      break;
  }
}
