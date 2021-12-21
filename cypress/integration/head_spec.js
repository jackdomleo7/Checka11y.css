describe("<head>", () => {
  before(() => {
    cy.visit("/test/index.html");
  });

  it('should not have an empty title', () => {
    cy.get("head title:empty")
      .each(element => {
        cy.get(element)
          .should('have.css', 'background-image') // yields data:image....
          .and('match', /data/)
      });
  });
});
