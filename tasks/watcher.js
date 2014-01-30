module.exports = function (grunt) {
    grunt.registerTask('watcher', [], function () {
        grunt.loadNpmTasks('grunt-contrib-watch');
        grunt.config('watch', {
            js: {
                files: ['Gruntfile.js', './source/js/**/*'],
                tasks: ['js'],
                options: {
                    spawn: false,
                }
            },
            css: {
                files: ['./source/scss/**/*'],
                tasks: ['css'],
                options: {
                    spawn: false,
                }
            },
            html: {
                files: ['./source/tmpl/*'],
                tasks: ['html'],
                options: {
                    spawn: false,
                }
            },
        });
        grunt.task.run('watch');
    });
};