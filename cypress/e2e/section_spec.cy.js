describe('<section>', () => {
  const sectionLastChildHTML = [];
  beforeEach(() => {
		cy.visit('/test/index.html')

		// Get all last child element from a section with heading element.
		cy.get('section > :is( h1, h2, h3, h4, h5, h6 ) ~ :not( :is( h1, h2, h3, h4, h5, h6, img ) ):last-child').each((element) => {
			cy.get(element)
				.invoke('prop', 'outerHTML')
				.then((html) => {
					sectionLastChildHTML.push(html)
				})
		})
  })

  it('should show warning on last child if section does not have heading element', () => {
    cy.get('section > :not( h1, h2, h3, h4, h5, h6, img ):last-child')
      .each((element) => {
        cy.get(element)
          .invoke('prop', 'outerHTML').then(html => {
            if(!sectionLastChildHTML.includes(html)) {
              cy.get(element)
                .before('content')
                .should('eq', 'WARNING (W0012): A <section> should contain a heading element.');
            }
        })
    });
  });

  it('should show warning on if section is empty', () => {
    cy.get('section:empty')
      .each((element) => {
        cy.get(element)
          .invoke('prop', 'outerHTML').then(html => {
            if(!sectionLastChildHTML.includes(html)) {
              cy.get(element)
                .before('content')
                .should('eq', `WARNING (W0012): A <section> should contain a heading element.`);
            }
        })
    });
  });
});
