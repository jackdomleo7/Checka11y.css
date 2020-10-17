describe('CheckA11y.css Tests', () => {
  // this is how Cypress reads the CSS. It will need to be changed if colors change!
  const ERROR_BOXSHADOW = 'rgb(255, 0, 0) 0px 0px 0px 4px';
  const WARNING_BOXSHADOW = 'rgb(255, 255, 102) 0px 0px 0px 4px';
  const ERROR_BORDER = '6.4px solid rgb(255, 0, 0)';

  /**
  * Code adapted from Victor Navarro: https://stackoverflow.com/a/57249958/3695983
  */
  const unquote = str => str.replace(/(^")|("$)/g, '');

  /**
   * Add command "before" to Cypress.
   * This command will take a CSS property as a string parameter, and return the value
   * of the property in the ::before of the selected element.
   * Example of use: cy.get("button").before("content") will return the value of the
   * content property of the button element.
   */
  Cypress.Commands.add(
    'before',
    { prevSubject: 'element' },
    (el, property) => {
      const win = el[0].ownerDocument.defaultView;
      const before = win.getComputedStyle(el[0], 'before');
      return unquote(before.getPropertyValue(property));
    },
  );
  /**
   * Add command "after" to Cypress.
   * Same as above, but for the ::after pseudo-element.
   */
  Cypress.Commands.add(
    'after',
    { prevSubject: 'element' },
    (el, property) => {
      const win = el[0].ownerDocument.defaultView;
      const before = win.getComputedStyle(el[0], 'after');
      return unquote(before.getPropertyValue(property));
    },
  );
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
    it('should show outline on elements with autoplay', () => {
      cy.get("[autoplay]")
        .each(element => {
          cy.get(element)
            .should('have.css', 'box-shadow', ERROR_BOXSHADOW)
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
              .should('have.css', 'box-shadow', ERROR_BOXSHADOW)
          });
      });

      afterElements.forEach(el => {
        cy.get(`button ${el}`)
          .each(element => {
            if (element) {
              cy.get(element)
                .after('content')
                .should('eq', `ERROR: Ensure that <${el}> is not a child of <button> as it is an invalid HTML.`);
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
});
