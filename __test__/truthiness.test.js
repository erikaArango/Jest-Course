// toBeNull matches only null
// toBeUndefined matches only undefined
// toBeDefined is the opposite of toBeUndefined
// toBeTruthy matcher anything that an if statement treats as true
// toBeFalsy matcher anything that an if statement treats as false

test("null", () => {
  const n = null;
  expect(n).toBeNull();
  expect(n).toBeDefined();
  expect(n).not.toBeUndefined();
  expect(n).not.toBeTruthy();
  expect(n).toBeFalsy();
});

test("zero", () => {
  const zero = 0;
  expect(zero).not.toBeNull();
  expect(zero).toBeDefined();
  expect(zero).not.toBeTruthy();
  expect(zero).toBeFalsy();
});

test("adding floating point number", () => {
  const value = 0.1 + 0.2;

  expect(value).toBeCloseTo(0.3);
});
