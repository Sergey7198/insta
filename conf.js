exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['Insta_bot.js'],
    capabilities: {
        'browserName': 'chrome',
        // acceptSslCerts: true,
        chromeOptions: {
            args: ['disable-gpu', 'window-size=1920,1080',
                'test-type=browser', 'incognito',
                'disable-application-cache'
//                    'headless'
            ]
        }
    }
};