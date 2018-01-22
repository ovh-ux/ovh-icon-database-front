// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  'AddButton Initial State': function (browser) {
    // automatically uses dev Server port from /config.index.js
    // default: http://localhost:8080
    // see nightwatch.conf.js
    const devServer = browser.globals.devServerURL

    browser
      .url(devServer)
      .waitForElementVisible('#app', 5000)
      .assert.elementPresent('.addButton__link')
      .assert.attributeEquals('.addButton__link', 'href', devServer + '/#/upload')
      .assert.elementPresent('.addButton__icon-container')
      .assert.elementPresent('.addButton__icon')
      .assert.elementPresent('.addButton__label');

    browser.expect.element('.addButton__link').to.be.an('a');

    browser.end();
  }
};
