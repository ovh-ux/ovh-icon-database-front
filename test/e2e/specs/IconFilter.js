// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  'IconFilter Initial State': function (browser) {
    // automatically uses dev Server port from /config.index.js
    // default: http://localhost:8080
    // see nightwatch.conf.js
    const devServer = browser.globals.devServerURL

    browser
      .url(devServer)
      .waitForElementVisible('#app', 5000)
      .assert.elementPresent('.icons-filter__content')
      .assert.elementPresent('.icons-filter__search')
      .assert.elementPresent('.icons-filter__search-field')
      .assert.elementPresent('.icons-filter__search-icon');

    browser.expect.element('.icons-filter__search-field').to.have.attribute('placeholder', 'Search icon');
    browser.expect.element('.icons-filter__search-field').to.have.value.that.equals('');

    browser.end();
  }
};
