import { 
  WARNING_BORDER_COLOR
} from "../support/constants";

describe("[autoplay]", () => {
  before(() => {
    cy.visit("/test/index.html");
  });
  
  it('should show warning outline on elements with autoplay', () => {
    cy.get("[autoplay]")
      .should('have.css', 'border-color', WARNING_BORDER_COLOR)
  });
});
