import { 
  ERROR_BORDER_COLOR
} from "../support/constants";

describe("<a>", () => {
  beforeEach(() => {
		cy.visit('/test/index.html')
  })

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

  it('should not be used as button', () => {
    cy.get("a[href='#'], a[role='button'], a[href^='javascript:']")
      .each(element => {
        cy.get(element)
          .after("content")
          .should('eq', "WARNING (W0011): Anchor tags should not be used as buttons. Links should redirect to a resource/page, if they don't they probably should be buttons.")
      });
  });

  it('should have an anchor tag with a link to a PDF, Word, Excel, or PowerPoint document is present on the page.', () => {
    const fileTypes = [
      ".pdf",
      ".docx",
      ".doc",
      ".xlsx",
      ".xls",
      ".pptx",
      ".pptm",
      ".ppt",
      ".txt"
    ];

    fileTypes.forEach(ext => {
      cy.get(`a[href*='${ext}']`)
        .each(element => {
          cy.get(element)
            .after("content")
            .should('eq', "WARNING (W0013): Anchor tags that contain a link to a PDF, Word, Excel, or PowerPoint document is present on the page and could be a potential accessibility issue.")
        });
      });
  });

  it('should have an anchor tag with link to a content site', () => {
    const sites = [
      "https://youtu.be",
      "https://youtube.com",
      "https://spotify.com/"
    ];
    sites.forEach(site => {
      cy.get(`a[href*='${site}']`)
        .each(element => {
          cy.get(element)
            .after("content")
            .should('eq', "WARNING (W0014): Anchor tags that contain a link to content site (Youtube, Spotify etc) is present on the document.")
        });
      });
  });
});
