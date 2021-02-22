import { 
  ERROR_BORDER_COLOR
} from "../support/constants";

describe("<iframe>", () => {
  before(() => {
    cy.visit("/test/index.html");
  });

  it('should show error if the iframe does not have a title', () => {
    cy.get("iframe:not([title])")
      .each(element => {
        cy.get(element)
          .should('have.css', 'border-color', ERROR_BORDER_COLOR)
      });
  });

  it('should not show error if the iframe has a non-empty title', () => {
    cy.get("iframe[title]")
      .each(element => {
        cy.get(element)
          .invoke("attr", "title")
          .should('not.be', '')
      });
  });
});
