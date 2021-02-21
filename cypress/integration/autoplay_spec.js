import { 
  ERROR_WARNING_COLOR
} from "../support/constants";

describe("[autoplay]", () => {
  before(() => {
    cy.visit("/test/index.html");
  });
  
  it('should show warning outline on elements with autoplay', () => {
    cy.get("[autoplay]")
      .each(element => {
        cy.get(element)
          .should('have.css', 'border-color', ERROR_WARNING_COLOR)
      });
  });
});
