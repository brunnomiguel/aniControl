context("User path", () => {
  it("Enters the landing page and tries to go to the register page", () => {
    cy.visit("http://localhost:3000");
    cy.viewport(1440, 900);
    cy.get(".css-6iyf1g").contains(/anicontrol/i);
  });

  // it("Enters the register page and creates an user", () => {
  //   cy.visit("http://localhost:3000/signin");
  //   cy.viewport(1440, 900);
  //   cy.get(".css-1i22j4g").click();
  // });
});
