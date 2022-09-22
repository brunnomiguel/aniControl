context("User path", () => {
  // it("Enters the landing page and tries to go to the register page", () => {
  //   cy.visit("http://localhost:3000");
  //   cy.viewport(1440, 900);
  //   cy.get(".css-yjn71v").contains(/anicontrol/i);
  // });

  it("Enters the register page and creates an user", () => {
    cy.visit("http://localhost:3000/signup");
    cy.viewport(1440, 900);
    cy.get(".css-1i22j4g").click();
  });

  // it("Enters the signin page and loggs in", () => {
  //   cy.visit("http://localhost:3000/signin");
  //   cy.viewport(1440, 900);
  //   cy.get(".css-1i22j4g").click();
  // });

  // it("Enters the browse page and adds an anime", () => {
  //   cy.visit("http://localhost:3000/login");
  //   cy.viewport(1440, 900);
  //   cy.get(".css-1i22j4g").click();
  // });

  // it("Enters the dashboard page and edits an anime", () => {
  //   cy.viewport(1440, 900);
  //   cy.get(".css-1i22j4g").click();
  // });
});
