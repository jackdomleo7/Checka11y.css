describe("[inline]", () => {
  before(() => {
    cy.visit("/test/index.html");
  });

  it('should not have inline styles with !important', () => {
    cy.get("[style*='!important']")
      .each(element => {
        cy.get(element)
          .after('content')
          .should('eq', "WARNING (W0004): !important inline styles should be avoided.");
      });
  });

  it('should have role="text" if it contains em or span', () => {
    cy.get(":not([role='text']) span, :not([role='text']) em")
      .each(element => {
        cy.get(element)
        .after('content')
        .should('eq', "WARNING (W0005): Text broken by <span> or <em> elements might need a [role='text'] attribute.");
      });
  });
});
