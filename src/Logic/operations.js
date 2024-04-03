export function sum(a, b) {
  if (isNaN(Number(a)) || isNaN(Number(b))) {
    return NaN;
  }

  return a + b;
}

export function sub(a, b) {
  if (isNaN(Number(a)) || isNaN(Number(b))) {
    return NaN;
  }
  return a - b;
}

export function multiply(a, b) {
  if (isNaN(Number(a)) || isNaN(Number(b))) {
    return NaN;
  }
  return a * b;
}

export function division(a, b) {
  if (isNaN(Number(a)) || isNaN(Number(b))) {
    return NaN;
  }
  return a / b;
}

export function sumAndMultiply(a, b) {
  return sum(a, b) * b;
}

export function sumAndMultiplyWithCalback(a, b, func) {
  const res = sum(a, b) * b;
  func(res);
}
