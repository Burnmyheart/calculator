const OPERATORS = {
  sum: "+",
  substrac: "-",
  multiply: "*",
  divide: "/",
};

function calculate({ a, b, operator }) {
  switch (operator) {
    case OPERATORS.sum:
      result = sum(a, b);
      break;

    case OPERATORS.substrac:
      break;

    case OPERATORS.multiply:
      result = multiply(a, b);
      break;

    case OPERATORS.divide:
      result = divide(a, b);
      break;
  }
}
