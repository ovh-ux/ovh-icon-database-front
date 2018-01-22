// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  'HomePage Initial State': function (browser) {
    // automatically uses dev Server port from /config.index.js
    // default: http://localhost:8080
    // see nightwatch.conf.js
    const devServer = browser.globals.devServerURL

    browser
      .url(devServer)
      .waitForElementVisible('#app', 5000)
      .assert.elementPresent('.header')
      .assert.elementPresent('.page-title')
      .assert.containsText('.page-title', 'OVH Icon Database')
      .assert.elementNotPresent('.icon-filter')
      .assert.elementNotPresent('.icon-list')
      .assert.elementNotPresent('.download-panel')
      .end();
  }
};
