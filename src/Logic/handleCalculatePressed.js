import { sum, sub, multiply, division } from "./operations.js";

export function handleCalculatePressed(
  firstNumber,
  secondNumber,
  operation,
  setResult
) {
  if (operation === "+") {
    setResult(sum(firstNumber, secondNumber));
  }
  if (operation === "-") {
    setResult(sub(firstNumber, secondNumber));
  }
  if (operation === "*") {
    setResult(multiply(firstNumber, secondNumber));
  }
  if (operation === "/") {
    if (secondNumber != 0) {
      setResult(division(firstNumber, secondNumber));
    } else {
      var result = "Cannot execute";
      setResult(result);
    }
  }
}
