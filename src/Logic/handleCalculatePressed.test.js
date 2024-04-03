import { handleCalculatePressed } from "./handleCalculatePressed.js";
import assert from "assert";

///////////////////////////////////////////////////
function a(arg) {
  assert.equal(3, arg);
}
handleCalculatePressed(1, 1, "+", a);
