describe("[accesskey]", () => {
  before(() => {
    cy.visit("/test/index.html");
  });

  it('should show warning on elements with accesskey', () => {
    cy.get("[accesskey]")
      .each(element => {
        cy.get(element)
          .after('content')
          .should('eq', 'WARNING: accesskey attribute could interfere and conflict with screen readers and assistive technologies.')
      });
  });
});
