const sum = require("../src/sum.js");
describe("pruebas para suma", () => {
  test("1 + 2 es 3", () => {
    expect(sum(1, 2)).toBe(3);
  });
  it ("deberia retornar 3 con 1+2",()=> {
      expect(sum(1,2)).toBe(3);
  })
});


