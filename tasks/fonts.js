module.exports = function (grunt) {
    grunt.registerTask('fonts', [], function () {
        grunt.loadNpmTasks('grunt-contrib-copy');
        grunt.config('copy', {
            js: {
                files: [{
                    expand: true,
                    cwd:    'source/fonts/',
                    src:    ['*'],
                    dest:   'output/fonts'
                }]
            }
        });
        grunt.task.run('copy');
    });
};