import { 
  ERROR_BORDER_COLOR
} from "../support/constants";

describe("<a>", () => {
  before(() => {
    cy.visit("/test/index.html");
  });

  it('should not have links with interactive content inside', () => {
    const noneElements = [
      "audio[controls]", "embed", "iframe", "img[usemap]", 'input:not([type="hidden"])',
      "object[usemap]", "select", "textarea", "video[controls]"
    ];
    const afterElements = ["button", "details", "label"];
    const beforeElements = [];

    noneElements.forEach(el => {
      cy.get(`a ${el}`)
        .each(element => {
          cy.get(element)
            .should('have.css', 'border-color', ERROR_BORDER_COLOR)
        });
    });

    afterElements.forEach(el => {
      cy.get(`a ${el}`)
        .each(element => {
          if (element) {
            cy.get(element)
              .after('content')
              .should('eq', `ERROR (E0009): Ensure that <${el}> is not a child of <a>.`);
          }
        });
    });

    beforeElements.forEach(el => {
      cy.get(`a ${el}`)
        .each(element => {
          if (element) {
            cy.get(element)
              .before('content')
              .should('eq', `ERROR (E0009): Ensure that <${el}> is not a child of <a>.`);
          }
        });
    })
  });

  it('should have aria-label or aria-labelledby if empty', () => {
    cy.get("a[href]:not([aria-label]):not([aria-labelledby]):empty")
      .each(element => {
        cy.get(element)
          .after("content")
          .should('eq', "ERROR (E0010): Ensure that <a> has meaningful content or is labelled appropriately.")
      });
  });

  it('should not open a link in a new tab or window', () => {
    cy.get("a[target='_blank']")
      .each(element => {
        cy.get(element)
          .after("content")
          .should('eq', "WARNING (W0006): Links that open in a new tab or window should be communicated to the user, ensure the user knows of this behavior.")
      });
  });
});
