describe("[aria-hidden]", () => {
	beforeEach(() => {
		cy.visit("/test/index.html")
	})

	it("should contain border-color rgb(255, 255, 102)", () => {
		const interactiveSelectors = ['[role="button"]', '[role="combobox"]', '[role="link"]', '[role="menuitem"]', '[role="menuitemcheckbox"]', '[role="menuitemradio"]', '[role="option"]', '[role="scrollbar"]', '[role="searchbox"]', '[role="slider"]', '[role="spinbutton"]', '[role="switch"]', '[role="tab"]', '[role="radio"]', '[role="textbox"]', '[role="treeitem"]', "a", "button", "summary", '[role="separator"][aria-valuenow]', '[role="separator"][aria-valuemin]', '[role="separator"][aria-valuemax]', "iframe"]

		interactiveSelectors.forEach((selector) => {
			cy.get(`${selector}[aria-hidden="true"]`).each((element) => {
				cy.wrap(element).after("border-color").should("eq", "rgb(255, 255, 102)")
			})
		})

		cy.get(`#interactive-elements input[aria-hidden="true"], #interactive-elements video[controls][aria-hidden="true"], #interactive-elements area[aria-hidden="true"], #interactive-elements audio[controls][aria-hidden="true"], #interactive-elements iframe[aria-hidden="true"], #interactive-elements select[aria-hidden="true"], #interactive-elements textarea[aria-hidden="true"], #interactive-elements video[controls][aria-hidden="true"]`).each((element) => {
			cy.wrap(element).should("have.css", "border-color", "rgb(255, 255, 102)")
		})
	})

	it("should contain warning content", () => {
		cy.get(`#interactive-elements div[aria-hidden="true"], #interactive-elements a[aria-hidden="true"], #interactive-elements button[aria-hidden="true"], #interactive-elements summary[aria-hidden="true"]`).each((element) => {
			cy.get(element).after("content").should("eq", "WARNING (W0017): Interactive element containing aria-hidden")
		})
	})
})
