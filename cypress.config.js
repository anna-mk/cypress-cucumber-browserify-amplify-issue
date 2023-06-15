const {defineConfig} = require('cypress')
const browserify = require('@badeball/cypress-cucumber-preprocessor/browserify')

module.exports = defineConfig({
    e2e: {
        specPattern: ['cypress/e2e/**/*.spec.js'],
        supportFile: 'cypress/support/index.js',
        async setupNodeEvents(on, config) {
            on('file:preprocessor', browserify.default(config))
            return config
        },
    },
    video: false,
    videoUploadOnPasses: false,
})
