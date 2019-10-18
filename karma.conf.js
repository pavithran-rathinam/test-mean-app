module.exports = function (config) {
  config.set({
    frameworks: ['jasmine'],
    files: [
      'node_modules/angular/angular.js',
      'node_modules/angular-mocks/angular-mocks.js',
      'node_modules/@uirouter/angularjs/release/angular-ui-router.min.js',
      'node_modules/angular-resource/angular-resource.min.js',
      'src/**/*.js',
      'test/**/*.js'
    ],
    preprocessors: {
      //files for which you want code coverage report
      'src/**/*.js': ['coverage']
    },
    // coverage reporter generates the coverage
    reporters: ['progress', 'coverage'],
    //configure the reporter and folder where you can see code coverag  e report
    coverageReporter: {
      type: 'html',
      dir: 'coverage/'
    },
    port: 9001,
    browsers: ['Chrome'],
    singleRun: true
  });
};