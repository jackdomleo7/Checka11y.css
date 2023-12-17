import { ERROR_BORDER_COLOR } from '../support/constants'

describe('<button>', () => {
	before(() => {
		cy.visit('/test/index.html')
	})
	beforeEach(() => {
		cy.visit('/test/index.html')
	})

	it('should not have buttons with interactive content inside', () => {
		cy.visit('/test/index.html')

		const noneElements = ['audio[controls]', 'embed', 'iframe', 'img[usemap]', 'input:not([type="hidden"])', 'object[usemap]', 'select', 'textarea', 'video[controls]']
		// removed "button" from afterElements because browser was correcting the issue
		const afterElements = ['details', 'label']
		const beforeElements = []

		noneElements.forEach((el) => {
			cy.get(`button ${el}`).each((element) => {
				cy.get(element).should('have.css', 'border-color', 'rgb(255, 0, 0)')
			})
		})

		afterElements.forEach((el) => {
			cy.get(`button ${el}`).each((element) => {
				if (element) {
					cy.get(element).after('content').should('eq', `ERROR (E0000): Ensure that <${el}> is not a child of <button>.`)
				}
			})
		})

		beforeElements.forEach((el) => {
			cy.get(`button ${el}`).each((element) => {
				if (element) {
					cy.get(element).before('content').should('eq', `ERROR: Ensure that <${el}> is not a child of <button> as it is an invalid HTML.`)
				}
			})
		})
	})

	it('should not have empty buttons', () => {
		cy.visit('/test/index.html')

		cy.get('button:not( [aria-label] ):not( [aria-labelledby] ):empty').each((element) => {
			cy.get(element).after('content').should('eq', 'ERROR (E0001): Ensure that <button> has meaningful content or is labelled appropriately.')
		})
	})
})
