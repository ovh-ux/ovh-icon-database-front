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
      .assert.elementPresent('.header')
      .assert.elementPresent('.upload')
      .assert.elementPresent('.upload__back-link')
      .assert.attributeEquals('.upload__back-link', 'href', devServer + '/#/')
      .assert.containsText('.upload__back-link', 'Back to library')
      .assert.elementPresent('.page-title')
      .assert.containsText('.page-title', 'Upload Icons')
      .assert.elementPresent('.upload__file-uploader')
      .assert.elementPresent('.upload-area')
      .assert.cssClassPresent('.upload-area', 'dz-clickable')
      .assert.elementPresent('.upload-area__content')
      .assert.cssClassPresent('.upload-area__content', 'dz-message')
      .assert.elementPresent('.upload-area__message')
      .assert.elementPresent('.upload-area__button')
      .assert.containsText('.upload-area__button', 'Upload file')
      .assert.elementNotPresent('.upload-list');

    browser.expect.element('.upload__back-link').to.be.a('a');
    browser.end()
  }
}
