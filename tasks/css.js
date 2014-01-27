module.exports = function (grunt) {
  grunt.registerTask('css', [], function () {
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.config('sass', {
        main: {
            files: {
                './output/css/classic.css':   './source/scss/site/classic.scss',
                './output/css/legacy-ie.css': './source/scss/site/legacy-ie.scss',
                './output/css/modern.css':    './source/scss/site/modern.scss'
            }
        },
    });
    grunt.task.run('sass');
  });
};