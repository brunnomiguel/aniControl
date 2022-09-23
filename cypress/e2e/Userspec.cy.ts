Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

context("User path", () => {
  it("Enters the landing page and tries to go to the register page", () => {
    cy.visit("https://ani-control.vercel.app/");
    cy.viewport(1440, 900);
    cy.get(".css-yjn71v").contains(/anicontrol/i);
    cy.contains("Sign Up").click();
  });

  it("Enters the register page and creates an user", () => {
    cy.viewport(1440, 900);
    cy.get('input[name="name"]').should("be.visible").type("teste2e");
    cy.get("input[name=email]").type("teste@e2e.com");
    cy.get("input[name=password]").type("123456");
    cy.get("input[name=confirm_password]").type("123456");
    cy.get("button[type=submit]").click();
  });

  it("Enters the signin page and loggs in", () => {
    cy.visit("https://ani-control.vercel.app/signin");
    cy.viewport(1440, 900);
    cy.get("#field-:r2:").type("teste@e2e.com");
    cy.get("#field-:r3:").type("123456");
    cy.get(".css-1qpqdiu").click();
  });
});
