//jshint strict: false
module.exports = function(config) {
  config.set({
    basePath: '.',
    autoWatch: true,
    frameworks: ['jasmine', 'browserify'],
    files: [
      'node_modules/moment/moment.js',
      'src/**/*.js'
    ],
    browsers: ['Chrome'],
    reporters: ['progress', 'coverage'],
    preprocessors: {
        'src/**/*.spec.js': ['browserify'],
        'src/**/!(*.spec).js': ['browserify']
    },
    singleRun: true,

    plugins: [
      'karma-coverage',
      'karma-browserify',
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-jasmine'
    ],
    transform: [
      ['browserify-istanbul',
        {
          instrumenterConfig: {
            embedSource: true   // this is important for HTML reports
          }
        }
      ]
    ]

  });
};
