describe("[dir]", () => {
  beforeEach(() => {
		cy.visit('/test/index.html')
  })

  it('should show error on elements with wrong values for dir attribute', () => {
    cy.get("[dir]:not([dir='rtl']):not([dir='ltr']):not([dir='auto'])")
      .each(element => {
        cy.get(element)
          .after('content')
          .should('eq', "ERROR (E0002): The dir attribute can only have the values, 'ltr', 'rtl' and 'auto'.");
      });
  });

  it('should not show error on elements with correct dir values', () => {
    cy.get("[dir='ltr'], [dir='rtl'], [dir='auto']")
      .each(element => {
        cy.get(element)
          .after('content')
          .should('not.contain', "ERROR");
      });
  });
});
