describe("<u>", () => {
  beforeEach(() => {
		cy.visit('/test/index.html')
  })

  it('should have aria-label or aria-labelledby if empty', () => {
    cy.get("u")
      .each(element => {
        cy.get(element)
          .after("content")
          .should('eq', "WARNING (W0007): Using <u> element could be confused as a hyperlink, consider using a different element such as <em> or <b>.")
      });
  });
});
