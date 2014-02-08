module.exports = function(grunt) {
  grunt.config('pkg', grunt.file.readJSON('package.json'));
  grunt.loadTasks('tasks');
  grunt.registerTask('default', ['js', 'css', 'html']);
};