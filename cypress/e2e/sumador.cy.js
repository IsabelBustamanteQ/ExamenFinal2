describe("Cambios", () => {
  it("Shows the amount of the addition to the user", () => {
    cy.visit("/");
    cy.get("#primer-numero").type(55);
    cy.get("#segundo-numero").type(60);
    cy.get("#sumar-button").click();
    cy.get("#resultado-div").should("contain", "5");
  });

  it("Deberia mostrar un mensaje de error si no se llenan los datos",()=> {
    cy.visit("/");
    cy.get("#sumar-button").click();
    cy.get("#sumar-button").click();
    cy.on('window:alert', (str) => {
      expect(str).to.equal(`Complete este campo`)
    });
  });
});
