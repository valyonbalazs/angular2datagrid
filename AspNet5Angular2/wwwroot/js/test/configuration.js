exports.config = {
    framework: 'jasmine',
    useAllAngular2AppRoots: true,
    rootElement: 'grid-container',
    specs: ['ang-test-*.js'],
    onPrepare: function () {
        var SpecReporter = require('jasmine-spec-reporter');
        // add jasmine spec reporter
        jasmine.getEnv().addReporter(new SpecReporter({ displayStacktrace: 'all' }));
    }
}