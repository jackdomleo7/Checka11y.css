import { 
  ERROR_BORDER_COLOR
} from "../support/constants";

describe("[tabindex]", () => {
  before(() => {
    cy.visit("/test/index.html");
  });

  it('should have a tab index different of -1 for commonly tabbed elements', () => {
    const noneElements = [
      "area[href]", "input:not([disabled])", "select:not([disabled])",
      "textarea:not([disabled])", "iframe"
    ];
    const afterElements = ["a[href]", "button:not([disabled])", "[contentEditable='true']"];
    const beforeElements = [];

    noneElements.forEach(el => {
      cy.get(`${el}[tabindex='-1']`)
        .each(element => {
          cy.get(element)
            .should('have.css', 'border-color', ERROR_BORDER_COLOR)
        });
    });

    afterElements.forEach(el => {
      cy.get(`${el}[tabindex='-1']`)
        .each(element => {
          if (element) {
            cy.get(element)
              .after("border-color")
              .should('eq', ERROR_BORDER_COLOR)
          }
        });
    });

    beforeElements.forEach(el => {
      cy.get(`${el}[tabindex='-1']`)
        .each(element => {
          if (element) {
            cy.get(element)
              .after("border-color")
              .should('eq', ERROR_BORDER_COLOR)
          }
        });
    });
  });
});
