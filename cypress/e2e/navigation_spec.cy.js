describe("<nav>", () => {
  before(() => {
    cy.visit("/test/index.html");
  });

  it('should have all navigations clearly labelled', () => {
    cy.get(`
        nav:not([aria-label]):not([aria-labelledby]) ~ nav,
        nav ~ nav:not([aria-label]):not([aria-labelledby])
      `)
      .each(element => {
        cy.get(element)
          .after("content")
          .should('eq', "ERROR (E0013): <nav> indicates the primary navigation for the page. In cases where multiple primary navigations exist, an aria-label or aria-labelledby attribute must be present on both <nav> elements.")
      });
  });
});
