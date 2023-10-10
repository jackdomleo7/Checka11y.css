describe("[handlers]", () => {
  beforeEach(() => {
		cy.visit('/test/index.html')
	})

  it('should show error if the iframe does not have a title', () => {
    cy.get(`
      [onclick]:not(a):not(button):not([onkeydown]):not([onkeyup]):not([onkeypress]),
      [onclick][onkeyup]:not([tabindex]):not(a):not(button),
      [onclick][onkeyup][tabindex="-1"]:not(a):not(button),
      [onclick][onkeydown]:not([tabindex]):not(a):not(button),
      [onclick][onkeydown][tabindex="-1"]:not(a):not(button),
      [onclick][onkeypress]:not([tabindex]):not(a):not(button),
      [onclick][onkeypress][tabindex="-1"]:not(a):not(button),
      [ondblclick]:not(a):not(button):not([onkeydown]):not([onkeyup]):not([onkeypress]),
      [ondblclick][onkeyup]:not([tabindex]):not(a):not(button),
      [ondblclick][onkeyup][tabindex="-1"]:not(a):not(button),
      [ondblclick][onkeydown]:not([tabindex]):not(a):not(button),
      [ondblclick][onkeydown][tabindex="-1"]:not(a):not(button),
      [ondblclick][onkeypress]:not([tabindex]):not(a):not(button),
      [ondblclick][onkeypress][tabindex="-1"]:not(a):not(button),
      [onmousedown]:not(a):not(button):not([onkeydown]):not([onkeyup]):not([onkeypress]),
      [onmousedown][onkeyup]:not([tabindex]):not(a):not(button),
      [onmousedown][onkeyup][tabindex="-1"]:not(a):not(button),
      [onmousedown][onkeydown]:not([tabindex]):not(a):not(button),
      [onmousedown][onkeydown][tabindex="-1"]:not(a):not(button),
      [onmousedown][onkeypress]:not([tabindex]):not(a):not(button),
      [onmousedown][onkeypress][tabindex="-1"]:not(a):not(button),
      [onmouseup]:not(a):not(button):not([onkeydown]):not([onkeyup]):not([onkeypress]),
      [onmouseup][onkeyup]:not([tabindex]):not(a):not(button),
      [onmouseup][onkeyup][tabindex="-1"]:not(a):not(button),
      [onmouseup][onkeydown]:not([tabindex]):not(a):not(button),
      [onmouseup][onkeydown][tabindex="-1"]:not(a):not(button),
      [onmouseup][onkeypress]:not([tabindex]):not(a):not(button),
      [onmouseup][onkeypress][tabindex="-1"]:not(a):not(button),
      [onmouseover]:not(a):not(button),
      [onmouseenter]:not(a):not(button),
      [onmouseleave]:not(a):not(button)
    `)
      .each(element => {
        cy.get(element)
          .after('content')
          .should('eq', "WARNING (W0002): Potentially inaccessible click event used on non-clickable element. Ensure you have an accessible alternative.");
      });
  });
});
