describe("<html>", () => {
  before(() => {
    cy.visit("/test/index.html");
  });

  it('should show error if HTML does not have lang attribute', () => {
    cy.get("html[lang]")
      .should('not.exist');
    cy.get('body')
      .before('content')
      .should("eq", "ERROR: html has no lang attribute.");
  });
});
