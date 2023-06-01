describe("Sumador", () => {
  it("Shows the amount of the addition to the user", () => {
    cy.visit("/");
    cy.get("#primer-numero").type(55);
    cy.get("#segundo-numero").type(60);
    cy.get("#sumar-button").click();
    cy.get("#resultado-div").should("contain", "5");
  });
});
