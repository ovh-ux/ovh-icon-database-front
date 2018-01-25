// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  'UploadPage e2e tests': function (browser) {
    // automatically uses dev Server port from /config.index.js
    // default: http://localhost:8080
    // see nightwatch.conf.js
    const devServer = browser.globals.devServerURL

    browser
      .url(devServer + '/#/upload')
      .waitForElementVisible('#app', 5000)
      .assert.elementPresent('.page-title')
      .assert.containsText('h2', 'Upload Icons')
      .end()
  }
}
