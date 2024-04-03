import { sum, sub, multiply, division, sumAndMultiply, sumAndMultiplyWithCalback, multiply } from "./operations";

import assert from "assert";

assert.equal(2, sum(1, 1));
assert.equal(3, sum(2, 1));

assert.equal(NaN, sum(undefined, 1));
assert.equal(NaN, sum(1, undefined));
assert.equal(NaN, sum(undefined, undefined));

///////////////////////////////////////////////////

assert.equal(2, sub(3, 1));
assert.equal(1, sub(2, 1));

assert.equal(NaN, sub(undefined, 1));
assert.equal(NaN, sub(2, undefined));
assert.equal(NaN, sub(undefined, undefined));

//////////////////////////////////////////////////

assert.equal(2, multiply(2, 1));
assert.equal(1, multiply(1, 1));

assert.equal(NaN, multiply(undefined, 1));
assert.equal(NaN, multiply(1, undefined));
assert.equal(NaN, multiply(undefined, undefined));

//////////////////////////////////////////////////

assert.equal(2, division(2, 1));
assert.equal(1, division(1, 1));

assert.equal(NaN, division(undefined, 1));
assert.equal(NaN, division(1, undefined));
assert.equal(NaN, division(undefined, undefined));

//////////////////////////////////////////////////

assert.equal(2, sumAndMultiply(1, 1));
assert.equal(3, sumAndMultiply(2, 1));

assert.equal(NaN, sumAndMultiply(undefined, 1));
assert.equal(NaN, sumAndMultiply(1, undefined));
assert.equal(NaN, sumAndMultiply(undefined, undefined));

///////////////////////////////////////////////////

sumAndMultiplyWithCalback(1, 1, (arg) => assert.equal(2, arg));
sumAndMultiplyWithCalback(2, 1, (arg) => assert.equal(3, arg));

sumAndMultiplyWithCalback(undefined, 1, (arg) => assert.equal(NaN, arg));
sumAndMultiplyWithCalback(1, undefined, (arg) => assert.equal(NaN, arg));
sumAndMultiplyWithCalback(undefined, undefined, (arg) =>
  assert.equal(NaN, arg)
);
