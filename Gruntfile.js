module.exports = function(grunt) {
  grunt.loadTasks('tasks');
  grunt.registerTask('default', ['js', 'css', 'html']);
};