module.exports = function (grunt) {
  grunt.registerTask('server', [], function () {
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.config('connect', {
        local: {
            options: {
                hostname: '127.0.0.1',
                port:     8080,
                directory: '/Users/maslet02/Dropbox/websites/sarahcoxart.co.uk/site/output',
                middleware: function (connect, options) {
                    var middlewares = [];
                    if (!Array.isArray(options.base)) {
                        options.base = [options.base];
                    }
                    var directory = options.directory || options.base[options.base.length - 1];
                        options.base.forEach(function (base) {
                        middlewares.push(connect.static(base));
                    });
                    middlewares.push(connect.static(directory));
                    middlewares.push(connect.directory(directory));
                    return middlewares;
                },
                keepalive: true
            }
        }
    });
    grunt.task.run('connect');
  });
};