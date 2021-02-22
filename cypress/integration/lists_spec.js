describe("<lists>", () => {
  before(() => {
    cy.visit("/test/index.html");
  });

  it('should have lists with only valid descendants', () => {
    cy.get(`
        ol > *:not(li):not(script):not(template),
        ul > *:not(li):not(script):not(template)
      `)
      .each(element => {
        cy.get(element)
          .after("content")
          .should('eq', "ERROR: List markup invalid. Ensure <li>, <script> or <template> are the only direct child of <ul> or <ol>.")
      });
  });

  it('should have definition lists with only valid descendants', () => {
    cy.get("dl > *:not(dt):not(dd)")
      .each(element => {
        cy.get(element)
          .after("content")
          .should('eq', "ERROR: List markup invalid. Ensure that the only direct children of <dl> are <dt> and <dd>.")
      });
  });
});
