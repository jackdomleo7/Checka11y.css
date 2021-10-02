import {
  ERROR_BORDER_COLOR,
  WARNING_BORDER_COLOR
} from "../support/constants";

describe("<images>", () => {
  before(() => {
    cy.visit("/test/index.html");
  });

  it('should show error if images do not have alternative text', () => {
    cy.get("img:not([alt])")
      .each(element => {
        cy.get(element)
          .should('have.css', 'border-color', ERROR_BORDER_COLOR)
      });
  });

  it('should show warning if images alternative text is not meaningful', () => {
    cy.get(`
        img[alt="image"i], img[alt="graphic"i], img[alt="photo"i], img[alt="photograph"i],
        img[alt="drawing"i], img[alt="painting"i], img[alt="artwork"i], img[alt="logo"i],
        img[alt="bullet"i], img[alt="button"i], img[alt="arrow"i], img[alt="more"i],
        img[alt="spacer"i], img[alt="blank"i], img[alt="chart"i], img[alt="table"i],
        img[alt="diagram"i], img[alt="graph"i], img[alt="*"i], img[alt=" "i]
      `)
      .each(element => {
        cy.get(element)
          .should('have.css', 'border-color', WARNING_BORDER_COLOR)
      });
  });

  it('should show warning if images alternative text start is not meaningful', () => {
    cy.get('img[alt^="graphic of"i], img[alt^="bullet"i], img[alt^="image of"i]')
      .each(element => {
        cy.get(element)
          .should('have.css', 'border-color', WARNING_BORDER_COLOR)
      });
  });

  it('should show warning if images alternative text end is not meaningful', () => {
    cy.get(`
        img[alt$=".png"i], img[alt$=".gif"i], img[alt$=".jpg"i], img[alt$=",jpeg"i],
        img[alt$=".svg"i], img[alt$=".bmp"i], img[alt$="image"i], img[alt$="graphic"i]
      `)
      .each(element => {
        cy.get(element)
          .should('have.css', 'border-color', WARNING_BORDER_COLOR)
      });
  });
});
