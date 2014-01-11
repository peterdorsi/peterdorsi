module.exports = function(grunt) {
    
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        dir: {
            deploy: {
                root:   'deploy/',
                js:     'deploy/js',
                assets: 'deploy/assets',
                css:    'deploy/css'
            },
            src: {
                root:   'src/',
                lib:    'src/lib/',
                js:     'src/js/**/*.js',
                assets: 'src/assets/',
                css:    'src/css/*.css',
                index:  'src/index.html'
            },
            assets: {
                root:   'assets/',
                maps:   'assets/maps/**/*.json',
                audio:  'assets/audio/'
            }
        },
        mkdir: {
            all: {
                options: {
                    mode: 0700,
                    create: [
                        'assets/maps', 'assets/audio',
                        'deploy',
                        'resources',
                        'src/css', 'src/js', 'src/lib'
                    ]
                },
            },
        },
        clean: ['<%= dir.deploy.root %>'],
        copy: {
            lib: {
                files: [{
                    cwd: '<%= dir.src.lib %>',
                    src: ['**'],
                    dest: '<%= dir.deploy.js %>',
                    expand: true
                }]
            },
            assets: {
                files: [
                    {
                        cwd: '<%= dir.assets.root %>',
                        src: ['*.*'],
                        dest: '<%= dir.deploy.assets %>',
                        expand: true
                    },
                    {
                        cwd: '<%= dir.assets.root %>',
                        src: ['audio/**/*.*'],
                        dest: '<%= dir.deploy.assets %>',
                        expand: true
                    },
                    {
                        cwd: '<%= dir.assets.root %>',
                        src: ['maps/**/*.json'],
                        dest: '<%= dir.deploy.assets %>',
                        expand: true
                    }
                ]
            },
            css: {
                files: [{
                    cwd: '<%= dir.src.root %>',
                    src: ['css/**/*.*'],
                    dest: '<%= dir.deploy.root %>',
                    expand: true
                }]
            },
            html: {
                files: [{
                    src: ['<%= dir.src.index %>'],
                    dest: '<%= dir.deploy.root %>',
                    expand: true,
                    flatten: true
                }]
            }
        },
        concat: {
            game: {
                options: {
                    process: {
                        data: {
                            version: '<%= pkg.version %>',
                            buildDate: '<%= grunt.template.today() %>'
                        }
                    }
                },
                src: ['<%= dir.src.js %>'],
                dest: '<%= dir.deploy.js %>/<%= pkg.name %>.js'
            }
        },
        uglify: {
            game: {
                options: {
                    banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
                },
                dist: {
                    src: ['<%= concat.game.dest %>'],
                    dest: '<%= dir.deploy.js %>/<%= pkg.name %>.min.js'
                }
            }

        },
        connect: {
            root: {
                options: {
                    port: 8080,
                    base: './deploy',
                    livereload: true
                }
            }
        },
        open: {
            dev: {
                path: 'http://localhost:8080/index.html',
                app: 'Google Chrome'
            }
        },
        watch: {
            source: {
                files: '<%= dir.src.js %>',
                tasks: ['updatejs'],
                options: {
                    livereload: true
                }
            },
            index: {
                files: '<%= dir.src.index %>',
                tasks: ['copy:html'],
                options: {
                    livereload: true
                }
            },
            css: {
                files: '<%= dir.src.css %>',
                tasks: ['copy:css'],
                options: {
                    livereload: true
                }
            }
        }
    });
    
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-open');
    grunt.loadNpmTasks('grunt-exec');
    grunt.loadNpmTasks('grunt-mkdir');
    
    grunt.registerTask('build', [
        'concat',
        'uglify',
        'copy'
    ]);
    
    grunt.registerTask('updatejs', [
        'concat',
        'uglify'
    ]);
    
    grunt.registerTask('default', [
        'clean',
        'build',
        'connect',
        'open',
        'watch'
    ]);
    
    grunt.registerTask('init', [
        'mkdir'
    ]);
    
}
