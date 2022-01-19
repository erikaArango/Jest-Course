test("2 + 2 = 4", () => {
  expect(2 + 2).toBe(4);
});

test("object validation", () => {
  const data = { username: "Erika Arango" };
  const data2 = { username: "Erika" };

  expect(data).toEqual({ username: "Erika Arango" });
  expect(data).not.toEqual(data2);
});
