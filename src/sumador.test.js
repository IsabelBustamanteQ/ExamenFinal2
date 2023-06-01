import restar from "./sumador.js";

describe("restar", () => {
  it("deberia restar dos numeros", () => {
    expect(restar(3, 2)).toEqual(1);
  });
});
