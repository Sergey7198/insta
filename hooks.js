const {Before, After, Status} = require('cucumber');
const remote = require('selenium-webdriver/remote');

Before(function () {
    return browser.waitForAngularEnabled(false);
});

Before(function () {
    return browser.setFileDetector(new remote.FileDetector());
});

After(function (testCase) {
    const world = this;

    if (testCase.result.status === Status.FAILED) {
        return browser.takeScreenshot().then(function (screenShot) {
            return world.attach(screenShot, 'image/png');
        });
    }
});
