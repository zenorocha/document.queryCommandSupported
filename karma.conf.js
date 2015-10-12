var customLaunchers = {
    chrome_42: {
        base: 'SauceLabs',
        browserName: 'chrome',
        version: '42'
    },
    chrome_latest: {
        base: 'SauceLabs',
        browserName: 'chrome'
    },
    opera_latest: {
        base: 'SauceLabs',
        browserName: 'opera'
    },
    firefox_40: {
        base: 'SauceLabs',
        browserName: 'firefox',
        version: '40'
    },
    firefox_latest: {
        base: 'SauceLabs',
        browserName: 'firefox'
    },
    safari_latest: {
        base: 'SauceLabs',
        browserName: 'safari',
        version: '8'
    },
    iphone_latest: {
        base: 'SauceLabs',
        browserName: 'iphone'
    },
    android_latest: {
        base: 'SauceLabs',
        browserName: 'android'
    },
    ie_9: {
        base: 'SauceLabs',
        browserName: 'internet explorer',
        version: '9'
    },
    ie_10: {
        base: 'SauceLabs',
        browserName: 'internet explorer',
        version: '10'
    },
    ie_11: {
        base: 'SauceLabs',
        browserName: 'internet explorer',
        version: '11'
    },
    edge_latest: {
        base: 'SauceLabs',
        browserName: 'microsoftedge'
    }
};

module.exports = function(karma) {
    karma.set({
        plugins: ['karma-browserify', 'karma-chai', 'karma-mocha', 'karma-sauce-launcher'],

        frameworks: ['browserify', 'chai', 'mocha'],

        files: [
            'src/**/*.js',
            'test/**/*.js'
        ],

        preprocessors: {
            'src/**/*.js' : ['browserify'],
            'test/**/*.js': ['browserify']
        },

        browserify: {
            debug: true
        },

        reporters: ['dots', 'saucelabs'],

        customLaunchers: customLaunchers,

        captureTimeout: 120000,

        browsers: Object.keys(customLaunchers),
    });
}
