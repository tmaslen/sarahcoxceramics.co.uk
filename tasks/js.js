module.exports = function (grunt) {
  grunt.registerTask('js', [], function () {
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.config('uglify', {
        options: {
            mangle: true
        },
        my_target: {
            files: {
                './output/js/main.js': [
                  './source/js/vendor/ender/ender.min.js', 
                  './source/js/vendor/eventEmitter.js',
                  './source/js/module/**.*'
                ]
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.config('copy', {
        'polyfills': {
            files: [{
                expand: true,
                cwd: 'source/js/vendor/polyfills/',
                src:  ['html5shiv.js'],
                dest: 'output/js/vendor/polyfills'
            }]
        }
    });
    grunt.task.run('uglify', 'copy:polyfills');
  });
};