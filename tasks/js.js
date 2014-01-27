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
    grunt.task.run('uglify');
  });
};