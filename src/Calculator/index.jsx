import { Layout } from "../Layout";
import { sum } from "../Logic/operations";
import { sub } from "../Logic/operations";
import { multiply } from "../Logic/operations";
import { division } from "../Logic/operations";
import { handleCalculatePressed } from "../Logic/handleCalculatePressed";
import { useState } from "react";
import { createContext, useContext } from "react";
export const ThemeContext = createContext({});

export function Calculator() {
  const [firstNumber, setFirstNumber] = useState("");
  const [secondNumber, setSecondNumber] = useState("");
  const [operation, setOperation] = useState();
  const [result, setResult] = useState();

  

  const handleNumberChanged = (e) => {
    if (
      !isNaN(Number(e.target.value)) &&
      (operation === undefined || operation === NaN)
    ) {
      setFirstNumber(Number(firstNumber + e.target.value));
    }

    if (isNaN(Number(e.target.value))) {
      setOperation(e.target.value);
    }

    if (
      !isNaN(Number(e.target.value)) &&
      firstNumber !== "" &&
      operation !== undefined
    ) {
      setSecondNumber(Number(secondNumber + e.target.value));
    }

    if (
      firstNumber !== "" &&
      secondNumber !== "" &&
      isNaN(Number(e.target.value))
    ) {
      handleCalculatePressed(firstNumber, secondNumber, operation, setResult);
    }

    if (result !== undefined && isNaN(Number(e.target.value))) {
      setFirstNumber(result);
      setOperation(e.target.value);
      setSecondNumber("");
    }

    if (
      !isNaN(Number(e.target.value)) &&
      firstNumber !== "" &&
      operation !== undefined
    ) {
      setSecondNumber(Number(secondNumber + e.target.value));
    }
  };

  const value = {
    handleNumberChanged: handleNumberChanged,
    firstNumber: firstNumber,
    secondNumber: secondNumber,
    operation: operation,
    result: result,
  };

  return (
    <ThemeContext.Provider value={value}>
      <Layout />
    </ThemeContext.Provider>
  );
}
