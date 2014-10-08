module.exports = function (grunt) {

    require('load-grunt-tasks')(grunt);
    require('time-grunt')(grunt);


    var appBase = 'app';
    var requireConfig = JSON.stringify(eval(grunt.file.read('app/etc/require.conf.js')), null, '\t');

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        config: {
            baseurl: appConfig.baseUrl,
            appDist: 'dist',
            appBase: appBase,
            appTmp: appBase + '/tmp',
            appLib: appBase + '/lib',
            appSrc: appBase + '/src',
            appConf: appBase + '/etc',
            appTests: appBase + '/test'
        },
        // REPLACE
        replace: {
            dev: {
                src: ['<%= config.appSrc %>/js/App/partials/index.tpl.html'],
                dest: '<%= config.appBase %>/index.html',
                replacements: [
                    {from: /\$APP_CSS/, to: "tmp/css/app.css"},
                    {from: /\$APP_DATA_MAIN/, to: "tmp/boot.js"},
                    {from: /\$APP_JS/, to: "lib/vendor/requirejs/require.js"}
                ]
            },
            dist: {
                src: ['<%= config.appSrc %>/js/App/partials/index.tpl.html'],
                dest: '<%= config.appDist %>/index.html',
                replacements: [
                    {from: /\$APP_CSS/, to: "css/app.css"},
                    {from: /\$APP_DATA_MAIN/, to: ""},
                    {from: /\$APP_JS/, to: "js/app.js"}
                ]
            },
            requireConfOnKarma: {
                src: ['etc/tpls/karma-test-main.tpl.js'],
                dest: '<%= config.appTests %>/unit/test-main.js',
                replacements: [
                    {from: /\$REQUIREJS_CONFIG/, to: requireConfig},
                ]
            },
            requireConfOnBoot: {
                src: ['etc/tpls/boot.tpl.js'],
                dest: '<%= config.appTmp %>/boot.js',
                replacements: [
                    {from: /\$REQUIREJS_CONFIG/, to: requireConfig},
                ]
            }
        },
        // LESS
        less: {
            dev: {
                options: {modifyVars: {'icon-font-path': "'../../lib/vendor/bootstrap/dist/fonts/'"}},
                files: {'<%= config.appTmp %>/css/app.css': '<%= config.appSrc %>/less/app.less'}
            },
            dist: {
                options: {
                   cleancss: true,
                   strictImports: true,
                   relativeUrls: false,
                   sourceMap: true,
                   compress: true,
                   modifyVars: {'icon-font-path': "'../fonts/'"}
                },
                files: {'<%= config.appDist %>/css/app.css': '<%= config.appSrc %>/less/app.less'}
            }
        },
        // JSHINT
        jshint: {
            options: {
                jshintrc: 'etc/jshintrc',
                ignores: grunt.file.read('etc/jshintignore').trim().split('\n')
            },
            all: [
                '<%= config.appSrc %>/js/**/*.js'
            ]
        },
        // KARMA
        karma: {
            unit: {
                configFile: 'etc/karma.conf.js'
            }
        },
        // PROTRACTOR
        protractor: {
            all: {
                options: {
                    configFile: 'etc/protractor.js' // Target-specific config file
                }
            }
        },
        // REQUIREJS
        requirejs: {
            optimize: {
                options: {
                    baseUrl: 'app',
                    name: 'tmp/boot', // I don't really understand this
                    mainConfigFile: '<%= config.appTmp %>/boot.js',
                    out: '<%= config.appDist %>/js/app.js',
                    include: ['lib/vendor/requirejs/require.js'],
                    findNestedDependencies: true,
                    preserveLicenseComments: false,
                    exclude: ['etc/app.conf.js'],
                    optimize: 'none'
                    //optimize: 'uglify2'
                }
            }
        },
        // COPY
        copy: {
            dist: {
                files: [
                    {expand: true, cwd: '<%= config.appLib %>/vendor/bootstrap/dist', src: ['fonts/*'], dest: '<%= config.appDist %>/'},
                    {expand: true, cwd: '<%= config.appConf %>', src: ['app.conf.js'], dest: '<%= config.appDist %>/etc'},
                    {expand: true, cwd: '<%= config.appBase %>', src: ['img/**/*'], dest: '<%= config.appDist %>'},
                    {expand: true, cwd: '<%= config.appBase %>', src: ['.htaccess'], dest: '<%= config.appDist %>'}
                ]
            }
        },
        // WATCH
        watch: {//might need: echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p
            requireConf: {
                files: ['<%= config.appConf %>/require.conf.js'],
                tasks: ['replace:requireConfOnBoot', 'replace:requireConfOnBoot']
            },
            less: {
                files: ['<%= config.appSrc %>/less/*.less'],
                tasks: ['less']
            }
        }
    });

    grunt.registerTask('develop', ['replace:dev', 'less:dev', 'replace:requireConfOnBoot']);
    grunt.registerTask('dist', ['replace:dist', 'replace:requireConfOnBoot', 'less:dist', 'copy:dist', 'requirejs:optimize']);
    grunt.registerTask('unitTest', ['replace:requireConfOnKarma', 'karma:unit']);
};