describe('Checka11y.css Tests', () => {
  // this is how Cypress reads the CSS. It will need to be changed if colors change!
  const ERROR_BOXSHADOW = 'rgb(255, 0, 0) 0px 0px 0px 4px';
  const WARNING_BOXSHADOW = 'rgb(255, 255, 102) 0px 0px 0px 4px';
  const ERROR_BORDER = '6.4px solid rgb(255, 0, 0)';

  /**********/

  before(() => {
    cy.visit("/test/index.html");
  })

  describe("[accesskey]", () => {
    it('should show warning on elements with accesskey', () => {
      cy.get("[accesskey]")
        .each(element => {
          cy.get(element)
            .after('content')
            .should('eq', 'WARNING: accesskey attribute could interfere and conflict with screen readers and assistive technologies.')
        });
    });
  })

  describe("[autoplay]", () => {
    it('should show warning outline on elements with autoplay', () => {
      cy.get("[autoplay]")
        .each(element => {
          cy.get(element)
            .should('have.css', 'border-color', 'rgb(255, 255, 102)')
        });
    });
  });

  describe("<button>", () => {
    it('should not have buttons with interactive content inside', () => {
      const noneElements = [
        "audio[controls]", "embed", "iframe", "img[usemap]", 'input:not([type="hidden"])',
        "object[usemap]", "select", "textarea", "video[controls]"
      ];
      // removed "button" from afterElements because browser was correcting the issue
      const afterElements = ["details", "label"];
      const beforeElements = [];

      noneElements.forEach(el => {
        cy.get(`button ${el}`)
          .each(element => {
            cy.get(element)
              .should('have.css', 'border-color', 'rgb(255, 0, 0)')
          });
      });

      afterElements.forEach(el => {
        cy.get(`button ${el}`)
          .each(element => {
            if (element) {
              cy.get(element)
                .after('content')
                .should('eq', `ERROR: Ensure that <${el}> is not a child of <button>.`);
            }
          });
      });

      beforeElements.forEach(el => {
        cy.get(`button ${el}`)
          .each(element => {
            if (element) {
              cy.get(element)
                .before('content')
                .should('eq', `ERROR: Ensure that <${el}> is not a child of <button> as it is an invalid HTML.`);
            }
          });
      })
    });

    it('should not have empty buttons', () => {
      cy.get('button:not( [aria-label] ):not( [aria-labelledby] ):empty')
        .each(element => {
          cy.get(element)
            .after("content")
            .should('eq', "ERROR: Ensure that <button> has meaningful content or is labelled appropriately.")
        });
    });
  });

  describe("<html>", () => {
    it('should show error if HTML does not have lang attribute', () => {
      cy.get("html[lang]")
        .should('not.exist');
      cy.get('body')
        .before('content')
        .should("eq", "ERROR: html has no lang attribute.");
    });
  });

  describe("<headings>", () => {
    it('should not have empty headings', () => {
      cy.get("h1:empty, h2:empty, h3:empty, h4:empty, h5:empty, h6:empty")
        .each(element => {
          cy.get(element)
            .after("border-color")
            .should('eq',  'rgb(255, 0, 0)') // they could have different error messages
        });
    });

    it('should be accessible to assistive technologies', () => {
      cy.get("h1[aria-hidden], h2[aria-hidden], h3[aria-hidden], h4[aria-hidden], h5[aria-hidden], h6[aria-hidden]")
        .each(element => {
          cy.get(element)
            .after("border-color")
            .should('eq',  'rgb(255, 0, 0)') // they could have different error messages
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
});
