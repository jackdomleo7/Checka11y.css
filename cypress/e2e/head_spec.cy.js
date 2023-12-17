describe("<head>", () => {
beforeEach(() => {
	cy.visit('/test/index.html')
})

  it('should not have an empty title', () => {
    cy.get("head title:empty")
      .each(element => {
        cy.get(element)
          .should('have.css', 'background-image') // yields data:image....
          .and('match', /data/)
      });
  });

  it('should not disallow user zooming an', () => {
    cy.get('head meta[name="viewport"][content*="maximum-scale=1"i], head meta[name="viewport"][content*="user-scalable=no"i]')
      .each(element => {
        cy.get(element)
          .should('have.css', 'background-image') // yields data:image....
          .and('match', /data/)
      });
  });
});
