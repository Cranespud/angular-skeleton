module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);
  require('time-grunt')(grunt);

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'src/<%= pkg.name %>.js',
        dest: 'build/<%= pkg.name %>.min.js'
      }
    },

    // LESS
    less: {
        development: {
            files: {
                'app/src/css/app.css': 'app/src/less/app.less'
            }
        }
    },

    // JSHINT
    jshint: {
        options: {
            jshintrc: 'etc/jshintrc',
            ignores: grunt.file.read('etc/jshintignore').trim().split('\n')
        },
        all: [
            'app/src/js/**/*.js'
        ]
    },

    // KARMA
    karma: {
      unit: {
        configFile: 'etc/karma.js',
      }
    },

    // PROTRACTOR
    protractor: {
        all: {
            options: {
                configFile: "etc/protractor.js", // Target-specific config file
            }
        },
    }
  });
};