//toMatch
describe("email validation", () => {
  test("this is an email", () => {
    const email = "erika@mail.com";

    expect(email).toMatch(/\S+@\S+\.\S+/);
  });

  test("this is not  an email", () => {
    const email = "erikamail.com";

    expect(email).not.toMatch(/\S+@\S+\.\S+/);
  });
});
