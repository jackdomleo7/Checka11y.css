describe("<headings>", () => {
  before(() => {
    cy.visit("/test/index.html");
  });

  it('should not have empty headings', () => {
    cy.get("h1:empty, h2:empty, h3:empty, h4:empty, h5:empty, h6:empty")
      .each(element => {
        cy.get(element)
          .after("border-color")
          .should('eq', 'rgb(255, 0, 0)') // they could have different error messages
      });
  });

  it('should be accessible to assistive technologies', () => {
    cy.get("h1[aria-hidden], h2[aria-hidden], h3[aria-hidden], h4[aria-hidden], h5[aria-hidden], h6[aria-hidden]")
      .each(element => {
        cy.get(element)
          .after("border-color")
          .should('eq', 'rgb(255, 0, 0)') // they could have different error messages
      });
  });

  it('should be accessible to assistive technologies', () => {
    cy.get("#heading-skip-levels h1, #heading-skip-levels h5, #heading-skip-levels h3")
      .each(element => {
        cy.get(element)
          .after("content")
          .should('eq', "ERROR (E0005): Headings should not skip levels.")
      });
  });

  it('should not have role=text', () => {
    cy.get("h1[role='text'], h2[role='text'], h3[role='text'], h4[role='text'], h5[role='text'], h6[role='text']")
      .each(element => {
        cy.get(element)
          .after("content")
          .should('eq',  "WARNING (W0010): Using role='text' on a heading element causes it to lose semantic meaning for screen readers") 
      });
  });
});
