const { defineConfig } = require('cypress')

module.exports = defineConfig({
	projectId: '8purx7',
	// defaultCommandTimeout: 4000,
	retries: { openMode: 2, runMode: 1 }, 
	e2e: {
		setupNodeEvents(on, config) {
			// implement node event listeners here
		},
	},
})
