import { Container } from "../Container";
import { Input } from "../Input";
import { Button } from "../Button";
import { ThemeContext } from "../Calculator";

import { useContext, useState } from "react";
export function Layout() {
  const props = useContext(ThemeContext);

  let showInput = "";

  const { handleNumberChanged, firstNumber, operation, secondNumber, result } =
    props;

  // debugger;
  if (operation === "=") {
    showInput = result;
  } else if (secondNumber !== "") {
    showInput = secondNumber;
  } else if (operation !== undefined) {
    showInput = operation;
  } else {
    showInput = firstNumber;
  }

  return (
    <Container>
      <section className="content">
        <Input className="text" value={showInput} />

        <div className= "buttons">
          <Button
            name="1"
            type="number"
            value={1}
            onClick={handleNumberChanged}
          />
          <Button
            name="2"
            type="number"
            value={2}
            onClick={handleNumberChanged}
          />
          <Button
            name="3"
            type="number"
            value={3}
            onClick={handleNumberChanged}
          />
          <Button
            name="4"
            type="number"
            value={4}
            onClick={handleNumberChanged}
          />
          <Button
            name="5"
            type="number"
            value={5}
            onClick={handleNumberChanged}
          />
          <Button
            name="6"
            type="number"
            value={6}
            onClick={handleNumberChanged}
          />
          <Button
            name="7"
            type="number"
            value={7}
            onClick={handleNumberChanged}
          />
          <Button
            name="8"
            type="number"
            value={8}
            onClick={handleNumberChanged}
          />
          <Button
            name="9"
            type="number"
            value={9}
            onClick={handleNumberChanged}
          />
          <Button
            name="0"
            type="number"
            value={0}
            onClick={handleNumberChanged}
          />
          <Button
            name="+"
            type="text"
            value={"+"}
            onClick={handleNumberChanged}
          />
          <Button
            name="-"
            type="text"
            value={"-"}
            onClick={handleNumberChanged}
          />
          <Button
            name="*"
            type="text"
            value={"*"}
            onClick={handleNumberChanged}
          />
          <Button
            name="/"
            type="text"
            value={"/"}
            onClick={handleNumberChanged}
          />
          <Button
            name="="
            type="text"
            value={"="}
            onClick={handleNumberChanged}
          />
        </div>
      </section>
    </Container>
  );
}
