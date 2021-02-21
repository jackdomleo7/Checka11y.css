import { 
  ERROR_BORDER_COLOR
} from "../support/constants";

describe("<headings>", () => {
  before(() => {
    cy.visit("/test/index.html");
  });

  it('should not have empty headings', () => {
    cy.get("h1:empty, h2:empty, h3:empty, h4:empty, h5:empty, h6:empty")
      .each(element => {
        cy.get(element)
          .after("border-color")
          .should('eq', ERROR_BORDER_COLOR) // they could have different error messages
      });
  });

  it('should be accessible to assistive technologies', () => {
    cy.get("h1[aria-hidden], h2[aria-hidden], h3[aria-hidden], h4[aria-hidden], h5[aria-hidden], h6[aria-hidden]")
      .each(element => {
        cy.get(element)
          .after("border-color")
          .should('eq', ERROR_BORDER_COLOR) // they could have different error messages
      });
  });

  it('should be accessible to assistive technologies', () => {
    cy.get("#heading-skip-levels h1, #heading-skip-levels h4, #heading-skip-levels h5, #heading-skip-levels h6")
      .each(element => {
        cy.get(element)
          .after("content")
          .should('eq', "ERROR: Headings should not skip levels.")
      });
  });
});
