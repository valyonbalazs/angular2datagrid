module.exports = function (config) {
    config.set({
        basePath: '',
        frameworks: ['jasmine', 'browserify'],
        files: [
          'js/test/ts-test-*.js'
        ],
        exclude: [
        ],
        preprocessors: {
            'js/test/ts-test-*.js': ['browserify']
        },
        reporters: ['dots'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: false,
        browsers: ['Chrome'],
        singleRun: true
    });
};